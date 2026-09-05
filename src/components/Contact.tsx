import { contact, profile, socials } from '../data/resume'
import { ArrowUpRightIcon } from './Icons'
import MaskedText from './MaskedText'

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[rgb(var(--footer-rgb))] text-white transition-colors duration-300"
    >
      <div className="container-content grid gap-16 py-24 sm:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
        {/* 左侧: CTA 标题 + 联系方式 */}
        <div>
          <h2 className="section-title max-w-2xl text-white">
            {contact.heading}
          </h2>

          <div className="mt-14 grid gap-10 sm:grid-cols-2">
            <div>
              <p className="caption uppercase tracking-[0.15em] text-white/50">
                电子邮箱 / Email
              </p>
              {/* 公开版: 邮箱为脱敏乱码, 不提供真实 mailto 链接 */}
              <span className="heading-3 mt-3 block break-all font-black text-white">
                {/* 隐私模糊: 邮箱只展示前 7 个字符 */}
                <MaskedText text={profile.email} keep={7} />
              </span>
            </div>
            {profile.wechat && (
              <div>
                <p className="caption uppercase tracking-[0.15em] text-white/50">
                  即时通讯 / WeChat
                </p>
                <p className="heading-3 mt-3 font-black text-white">
                  {profile.wechat}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* 右侧: 社交账户卡片 */}
        {socials.length > 0 && (
          <div>
            <h3 className="heading-2 text-white">{contact.socialTitle}</h3>
            <div className="mt-8 space-y-4">
              {socials.map((s) => (
                <a
                  key={s.title}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/5 p-5 transition-colors hover:border-white/25 hover:bg-white/10"
                >
                  <div>
                    <p className="heading-4 text-white">{s.title}</p>
                    {/* 隐私模糊: 主页地址只展示前 7 个字符 */}
                    <p className="body-sm mt-1 text-white/50">
                      <MaskedText text={s.handle} keep={7} />
                    </p>
                  </div>
                  <ArrowUpRightIcon className="h-5 w-5 flex-none text-white/70 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
