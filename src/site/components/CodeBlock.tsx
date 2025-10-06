import React, { useState } from 'react';
import { Highlight, themes } from 'prism-react-renderer';

export function CodeBlock({ code, language = 'tsx' }: { code: string; language?: 'tsx' | 'ts' | 'js' | 'jsx' | 'bash' }) {
  const [visible, setVisible] = useState(true);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
    } catch {}
  };
  return (
    <div style={{ border: '1px solid #e5e7eb', borderRadius: 8, overflow: 'hidden' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', background: '#f8fafc', borderBottom: '1px solid #e5e7eb' }}>
        <div style={{ fontSize: 12, color: '#64748b' }}>{language}</div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button onClick={() => setVisible((v) => !v)} style={{ fontSize: 12 }}> {visible ? 'Hide' : 'Show'} </button>
          <button onClick={copy} style={{ fontSize: 12 }}>Copy</button>
        </div>
      </div>
      {visible && (
        <Highlight theme={themes.github} code={code.trim()} language={language}>
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={{ ...style, margin: 0, padding: 16 }}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      )}
    </div>
  );
}
