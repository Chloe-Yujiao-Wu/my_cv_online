// 局部隐私模糊文本
// 仅显示文本前 keep 个字符, 其余字符以毛玻璃模糊呈现(不可辨认), 随文字自然换行

interface MaskedTextProps {
  text: string
  /** 保持清晰可见的开头字符数, 默认 0(整段模糊) */
  keep?: number
  /** 透传到外层 span 的排版类名 */
  className?: string
  /** 大字号标题使用更强模糊 */
  strong?: boolean
}

export default function MaskedText({ text, keep = 0, className = '', strong = false }: MaskedTextProps) {
  const chars = Array.from(text)
  if (chars.length <= keep) {
    return <span className={className}>{text}</span>
  }
  const head = chars.slice(0, keep).join('')
  const tail = chars.slice(keep).join('')
  return (
    <span className={className}>
      {head}
      <span className={`privacy-blur${strong ? ' privacy-blur-strong' : ''}`}>{tail}</span>
    </span>
  )
}
