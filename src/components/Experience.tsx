import { useState } from 'react'
import { experiences } from '../data/resume'
import SectionTitle from './SectionTitle'
import MaskedText from './MaskedText'

// 筛选选项的通用标签: 不暴露真实时间段(隐私), 仅按履历顺序命名
const PERIOD_LABELS = ['第一段', '第二段', '第三段', '第四段']

export default function Experience() {
  // 筛选内部仍按真实 period 值匹配, 但界面只显示「第N段」
  const allPeriods = experiences.map((exp) => exp.period)
  const [selectedPeriods, setSelectedPeriods] = useState<string[]>(allPeriods)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const togglePeriod = (period: string) => {
    setSelectedPeriods((prev) =>
      prev.includes(period) ? prev.filter((p) => p !== period) : [...prev, period],
    )
  }
  const selectAll = () => setSelectedPeriods(allPeriods)
  const selectNone = () => setSelectedPeriods([])

  const filteredExperiences = experiences.filter((exp) => selectedPeriods.includes(exp.period))

  return (
    <section id="experience" className="section surface-soft">
      <div className="container-content">
        <SectionTitle eyebrow="Experience" title="工作履历" />

        {/* 筛选项 - 下拉菜单(选项以「第N段」呈现, 不显示真实时间段) */}
        <div className="mt-12">
          <div className="relative inline-block">
            <button
              type="button"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="label flex items-center gap-2 rounded-lg border-[1.5px] border-line bg-card px-5 py-3 text-ink transition-colors hover:border-accent"
            >
              <span>筛选履历段落</span>
              <span className="caption rounded-full bg-soft px-2 py-0.5 text-accent">
                {selectedPeriods.length}/{allPeriods.length}
              </span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`h-4 w-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            {dropdownOpen && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setDropdownOpen(false)}
                />
                <div className="absolute left-0 top-full z-20 mt-2 w-64 rounded-xl border border-line bg-card p-2 shadow-lg">
                  {allPeriods.map((period, i) => {
                    const isActive = selectedPeriods.includes(period)
                    return (
                      <label
                        key={period}
                        className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-soft"
                      >
                        <span
                          className={`flex h-5 w-5 flex-none items-center justify-center rounded border-[1.5px] transition-colors duration-200 ${
                            isActive ? 'border-accent bg-accent' : 'border-line bg-transparent'
                          }`}
                        >
                          {isActive && (
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="white"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-3 w-3"
                            >
                              <path d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </span>
                        <input
                          type="checkbox"
                          checked={isActive}
                          onChange={() => togglePeriod(period)}
                          className="sr-only"
                        />
                        <span className={`label ${isActive ? 'text-accent' : 'text-ink'}`}>
                          {PERIOD_LABELS[i] ?? `第${i + 1}段`}
                        </span>
                      </label>
                    )
                  })}
                  <div className="my-1 border-t border-line" />
                  <button
                    type="button"
                    onClick={selectNone}
                    className="label flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-muted transition-colors hover:bg-soft"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M18 6 6 18M6 6l12 12" />
                    </svg>
                    全不选
                  </button>
                  <button
                    type="button"
                    onClick={selectAll}
                    className="label flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-accent transition-colors hover:bg-soft"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M4 12h16M4 6h16M4 18h16" />
                    </svg>
                    全选
                  </button>
                </div>
              </>
            )}
          </div>
        </div>

        {/* 工作履历卡片 */}
        <div className="mt-10 max-h-[55vh] overflow-y-auto rounded-2xl border border-line bg-card p-8 shadow-sm sm:p-10">
          <div className="space-y-16">
            {filteredExperiences.map((exp) => (
              <div
                key={`${exp.company}-${exp.period}`}
                className="grid gap-6 lg:grid-cols-[200px_56px_1fr] lg:gap-0"
              >
                {/* 左列: 日期 + 地点(隐私蒙版) */}
                <div className="relative">
                  <p className="heading-3 text-accent">{exp.period}</p>
                  <p className="body-base mt-2">{exp.location}</p>
                  {/* 毛玻璃蒙版: 隐藏具体工作时间与地点 */}
                  <div className="privacy-mask" aria-hidden="true" />
                </div>

                {/* 中列: 时间线 */}
                <div className="hidden lg:flex lg:flex-col lg:items-center">
                  <span className="mt-2 h-3 w-3 flex-none rounded-full bg-accent" aria-hidden="true" />
                  <span className="mt-2 w-px flex-1 bg-line" aria-hidden="true" />
                </div>

                {/* 右列: 职位 + 成就列表 */}
                <div>
                  <h3 className="heading-2 relative inline-block pr-2">
                    {exp.role}{' '}
                    <span className="heading-3 font-normal text-muted">@{exp.company}</span>
                    {/* 毛玻璃蒙版: 隐藏具体岗位与公司名 */}
                    <span className="privacy-mask" aria-hidden="true" />
                  </h3>
                  <ul className="mt-6 space-y-3.5">
                    {exp.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span
                          className="mt-[0.7em] h-1.5 w-1.5 flex-none rounded-full bg-accent"
                          aria-hidden="true"
                        />
                        {/* 隐私模糊: 每条职责只展示前 7 个字 */}
                        <MaskedText text={point} keep={7} className="body-lg text-ink/90" />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
