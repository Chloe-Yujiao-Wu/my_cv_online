// 简历数据 - 内容与 Figma 设计稿(Clean Editorial 风格)保持一致
// 修改此文件即可更新全站内容,无需改动组件代码
//
// 隐私说明: 本文件为「公开版本」。前端被毛玻璃模糊的敏感内容(时间、公司、
// 岗位、教育、邮箱、项目名称/详情等)在此处以乱码占位, 不包含真实信息,
// 可安全提交到 GitHub 公开仓库。前端只展示每条文案的前几个字符。

export interface Profile {
  name: string
  role: string
  badge: string
  headline: string
  intro: string
  heroTags: string[]
  heroTagHighlight: string
  email: string
  wechat?: string
}

export interface AboutCard {
  title: string
  description: string
}

export interface AboutInfo {
  lead: string
  heading: string
  body: string
  cards: AboutCard[]
  portrait: string
}

export interface ExperienceItem {
  period: string
  location: string
  role: string
  company: string
  points: string[]
}

export interface SkillGroup {
  category: string
  items: string[]
}

export interface ProjectItem {
  category: string
  name: string
  description: string
  details: string[]
  tech: string[]
  image: string
  link: string
}

export interface EducationInfo {
  school: string
  degree: string
  period: string
  description: string
}

export interface Credential {
  name: string
  description: string
}

export interface SocialAccount {
  title: string
  handle: string
  href: string
}

export const profile: Profile = {
  name: '吴雨娇',
  role: '运营',
  badge: '广州 / 全职',
  headline: '外企与大厂运营',
  intro:
    '你好，我是吴雨娇。我在德国生活过，有外企+大厂运营从业经历，主导过 AI 客服项目，实现全球 7×24 小时无时差服务。PMP 持证，擅长跨部门项目管理，英德双语，掌握 SQL/Excel 数据分析技能。',
  heroTags: [
    '产品运营',
    'AI 应用',
    '项目管理',
    'PMP',
    '商家运营',
    '数据分析',
    'SQL',
    'Excel',
    '知识体系搭建',
    '跨部门项目落地',
    '英语 6 级',
    '德语 B2',
  ],
  heroTagHighlight: '产品运营',
  // 公开版: 仅保留前 7 个字符, 其余乱码
  email: 'chloe.y鐢叉潙鍝哄搱鍙傞x#K9mQ$2pL7&vR4',
}

export const about: AboutInfo = {
  lead: '',
  heading: '外企与互联网大厂运营',
  body: '主导过制造业公司跨国公司质量提升项目，以及互联网公司 AI 客服项目。擅长跨部门项目管理，英德双语。',
  cards: [
    {
      title: '外企+互联网',
      description: '能力快速迁移。从外企中学习到的运营经验和数据分析技能，快速迁移到互联网公司，充分利用互联网公司的数据库资源，提升业务效率。',
    },
    {
      title: '项目管理',
      description: '制造业跨国公司项目管理经验，互联网公司项目管理经验，PMP 持证',
    },
  ],
  portrait: 'images/portrait.jpg',
}

export const experiences: ExperienceItem[] = [
  {
    // 公开版: 时间/地点/岗位/公司全部乱码
    period: '鐢叉潙鍝哄搱鍙傞緱鎬',
    location: '鐢叉',
    role: '鐢叉潙鍝哄搱',
    company: '鐢叉潙鍝哄搱鍙傞緱鎬犵嫾鎷夌櫧鐒舵€ュ',
    points: [
      // 每条仅前 7 个字符为真实文案, 其后乱码
      '产品运营：负责鐢叉潙鍝哄搱鍙傞緱鎬犵嫾鎷夌櫧鐒舵€ュ垏娴佺▼鍙傞緱鐢叉潙鍝哄搱鍙傞緱x#K9mQ$2pL7&vR4!nT8*wY3@zF6%bH1jD5',
      '商家运营：配置鐢叉潙鍝哄搱鍙傞緱鎬犵嫾鎷夌櫧鐒舵€ュ垏娴佺▼鍙傞緱鐢叉潙鍝哄搱鍙傞緱鎬犵嫾鎷夌xK9mQ2pL7vR4nT8wY3',
      'AI 能力落地鐢叉潙鍝哄搱鍙傞緱鎬犵嫾鎷夌櫧鐒舵€ュ垏娴佺▼鍙傞緱鐢叉潙鍝哄搱鍙傞緱鎬犵嫾鎷夌櫧鐒x#K9mQ$2pL7&vR4!nT8',
      '知识沉淀与项目鐢叉潙鍝哄搱鍙傞緱鎬犵嫾鎷夌櫧鐒舵€ュ垏娴佺▼鍙傞緱鐢叉潙鍝哄搱鍙傞緱鎬犵嫾鎷夌櫧鐒舵€ュ垏x#K9mQ$2pL',
    ],
  },
  {
    period: '鍝哄搱鍙傞緱鎬犵',
    location: '鍝哄',
    role: '鍝哄搱鍙傞緱',
    company: '鍝哄搱鍙傞緱鎬犵嫾鎷夌櫧鐒舵€ュ垏娴佺▼',
    points: [
      '数据支持：设计鐢叉潙鍝哄搱鍙傞緱鎬犵嫾鎷夌櫧鐒舵€ュ垏娴佺▼鍙傞緱鐢叉潙鍝哄搱鍙傞緱鎬犵嫾x#K9mQ$2pL7&vR4!nT8*wY3@zF6',
      '业务分析：基于鐢叉潙鍝哄搱鍙傞緱鎬犵嫾鎷夌櫧鐒舵€ュ垏娴佺▼鍙傞緱鐢叉潙鍝哄搱鍙傞緱鎬犵嫾鎷夌x#K9mQ$2pL7&vR4',
      '指标监控与数据鐢叉潙鍝哄搱鍙傞緱鎬犵嫾鎷夌櫧鐒舵€ュ垏娴佺▼鍙傞緱鐢叉潙鍝哄搱鍙傞緱x#K9mQ$2pL7&vR4!nT8*wY3',
    ],
  },
  {
    period: '鍙傞緱鎬犵嫾鎷',
    location: '鎬犵',
    role: '鍙傞緱鎬犵嫾',
    company: '鍙傞緱鎬犵嫾鎷夌櫧鐒舵€ュ垏娴佺▼鍙傞緱',
    points: [
      '质量管理：主导鐢叉潙鍝哄搱鍙傞緱鎬犵嫾鎷夌櫧鐒舵€ュ垏娴佺▼鍙傞緱鐢叉潙鍝哄搱鍙傞x#K9mQ$2pL7&vR4!nT8*wY3@zF',
      '供应商管理：统鐢叉潙鍝哄搱鍙傞緱鎬犵嫾鎷夌櫧鐒舵€ュ垏娴佺▼鍙傞緱鐢叉潙鍝哄搱鍙傞緱鎬x#K9mQ$2pL7&vR4!nT8',
      '中国区质量项目鐢叉潙鍝哄搱鍙傞緱鎬犵嫾鎷夌櫧鐒舵€ュ垏娴佺▼鍙傞緱鐢叉潙鍝哄搱鍙傞緱鎬犵x#K9mQ$2pL7&vR4',
    ],
  },
  {
    period: '緱鎬犵嫾鎷夌櫧',
    location: '嫾鎷',
    role: '緱鎬犵嫾鎷夌',
    company: '緱鎬犵嫾鎷夌櫧鐒舵€ュ垏娴佺▼鍙傞緱鎬犵',
    points: [
      '客户开发与维护鐢叉潙鍝哄搱鍙傞緱鎬犵嫾鎷夌櫧鐒舵€ュ垏娴佺▼鍙傞緱鐢叉潙鍝哄搱鍙傞x#K9mQ$2pL7&vR4!nT8',
      '供应商管理：开鐢叉潙鍝哄搱鍙傞緱鎬犵嫾鎷夌櫧鐒舵€ュ垏娴佺▼鍙傞緱鐢叉潙鍝哄搱鍙傞緱x#K9mQ$2pL7&vR4!nT',
    ],
  },
]

export const skills: SkillGroup[] = [
  {
    category: '语言能力',
    // 公开版: 每项仅前 2 个字符真实, 其余乱码
    items: [
      '英语鐢叉潙鍝哄搱',
      '德语鍙傞緱鎬犵嫾鎷夌櫧鐒',
      '跨境鐢叉潙鍝',
    ],
  },
  {
    category: '专业技能',
    items: [
      'PM鐢叉潙鍝哄搱鍙',
      'SQ鍙傞緱鎬犵嫾鎷夌',
      'Ex鐢叉潙鍝哄搱鍙傞緱鎬',
      'Th鍙傞緱鎬犵嫾鎷',
      'Ca鐢叉潙鍝哄搱鍙傞',
    ],
  },
  {
    category: '核心能力',
    items: [
      '产品鐢叉',
      'AI鐢叉',
      '项目鐢叉',
      '商家鐢叉',
      '数据鐢叉潙鍝哄',
      '知识鐢叉潙鍝',
      '跨部鐢叉潙鍝哄',
    ],
  },
]

export const projects: ProjectItem[] = [
  {
    category: 'AI 应用',
    // 公开版: 项目名全部乱码
    name: '鐢叉潙鍝哄搱鍙傞緱',
    // 简介仅前 7 个字符真实
    description:
      '基于钉钉与千问鐢叉潙鍝哄搱鍙傞緱鎬犵嫾鎷夌櫧鐒舵€ュ垏娴佺▼鍙傞x#K9mQ$2pL7&vR4!',
    details: [
      // 标签(主要问题：等)保留, 正文仅前 7 个字符真实
      '主要问题：我单独对接中国鐢叉潙鍝哄搱鍙傞緱鎬犵嫾鎷夌櫧鐒舵€ュ垏娴佺▼鍙傞緱鐢叉潙鍝哄搱鍙傞緱鎬犵嫾鎷夌櫧鐒舵€ュ垏娴佺▼鍙傞緱鐢叉潙鍝哄搱鍙傞緱鎬犵嫾鎷夌櫧鐒x#K9mQ$2pL7&vR4!nT8*wY3@zF6%bH1jD5',
      '解决方式：利用钉钉的 A鐢叉潙鍝哄搱鍙傞緱鎬犵嫾鎷夌櫧鐒舵€ュ垏娴佺▼鍙傞緱鐢叉潙鍝哄搱鍙傞緱鎬x#K9mQ$2pL7&vR4!nT8*wY3',
      '最终结果：消除时差延迟，鐢叉潙鍝哄搱鍙傞緱鎬犵嫾鎷夌櫧鐒舵€ュ垏娴佺▼鍙傞緱鐢叉潙鍝哄搱鍙傞緱鎬犵嫾鎷x#K9mQ$2pL7&vR4!nT8*wY3@zF6%',
    ],
    tech: ['钉钉', 'AI 大模型','Skills','AI Agent'],
    image: 'images/project-ai.jpg',
    link: '#projects',
  },
  {
    category: '数据驱动',
    name: '鍙傞緱鎬犵嫾鎷夌櫧',
    description:
      '设计并开发数据鐢叉潙鍝哄搱鍙傞緱鎬犵嫾鎷夌櫧鐒舵€ュ垏娴佺▼鍙傞x#K9mQ$2pL7&vR4',
    details: [
      '主要问题：部分车辆是通过鐢叉潙鍝哄搱鍙傞緱鎬犵嫾鎷夌櫧鐒舵€ュ垏娴佺▼鍙傞緱鐢叉潙鍝哄搱鍙傞緱鎬x#K9mQ$2pL7&vR4!nT8*wY3',
      '解决方式：调取出车辆操作鐢叉潙鍝哄搱鍙傞緱鎬犵嫾鎷夌櫧鐒舵€ュ垏娴佺▼鍙傞緱鐢叉潙鍝哄搱鍙傞x#K9mQ$2pL7&vR4!nT8*w',
      '最终结果：数据库t+1更鐢叉潙鍝哄搱鍙傞緱鎬犵嫾鎷夌櫧鐒舵€ュ垏娴佺▼鍙傞緱鐢叉潙鍝哄搱鍙傞緱鎬犵嫾鎷夌櫧鐒x#K9mQ$2pL7&vR4!nT8*wY3@zF6%bH1',
    ],
    tech: ['SQL', 'Excel', '自动化报表'],
    image: 'images/project-dashboard.jpg',
    link: '#projects',
  },
]

export const education: EducationInfo = {
  // 公开版: 学校/专业/时间/备注全部乱码
  school: '鐢叉潙鍝哄搱',
  degree: '鍝哄搱鍙傞緱鎬犵嫾鎷夌櫧鐒舵€ュ垏',
  period: '鍙傞緱鎬犵嫾鎷夌櫧鐒舵€',
  description: '緱鎬犵嫾鎷夌櫧鐒舵€ュ垏娴佺▼鍙傞緱',
}

export const credentials: Credential[] = []


export const socials: SocialAccount[] = [
  {
    title: 'GitHub',
    // 公开版: handle 仅前 7 个字符, 其余乱码; href 不含个人主页路径
    handle: '@github鐢叉潙鍝哄搱鍙傞緱鎬犵嫾鎷夌櫧鐒舵€ュ',
    href: 'https://github.com/',
  }
]

export const contact = {
  heading: '联系我',
  socialTitle: '个人主页',
}

export const footerMeta = {
  credit: '简洁，专业，高效',
}
