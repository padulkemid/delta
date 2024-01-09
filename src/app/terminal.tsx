// TODO: remove this after the building is over this is so dumb
'use client'
import { useEffect, useRef, useState } from 'react';
import { Terminal } from 'xterm';
import 'xterm/css/xterm.css';

const TerminalScreen = () => {
  const [isFirstRender, setIsFirstRender] = useState(true)
  const termRef = useRef<HTMLDivElement | null>(null)
  const termPS1 = 'padulkemid@universe $ '

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false)
      return
    }

    const term = new Terminal({
      theme: { background: '#000000', foreground: '#ffffff' },
      fontSize: 14,
      fontFamily: 'monospace',
      cursorBlink: true,
      cursorStyle: 'block',
      scrollback: 1000,
    })

    term.open(termRef.current as HTMLDivElement)

    const xtermViewport = (termRef.current as HTMLDivElement).querySelector('.xterm-viewport') as HTMLElement;
    xtermViewport.style.overflow = 'hidden';

    term.write(termPS1)
    term.focus()
    term.onData((data) => {
      if (data === '\r') {
        term.writeln('')
        term.writeln('hi, padul is still working, stay tune!')
        term.write(termPS1)
      } else if (data === '\x7f') {
        const cx = term.buffer.active.cursorX

        if (cx > termPS1.length) term.write('\b \b')
      } else {
        term.write(data)
      }
    })

    return () => {
      term.dispose()
    }
  }, [isFirstRender])

  return <div ref={termRef} />
}

export default TerminalScreen
