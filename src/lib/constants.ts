export const sites = ['nhentai.to', 'nhentai.net', 'nhentai.website'] as const

export const baseURLS = {
    to: 'https://nhentai.to',
    net: 'https://nhentai.net',
    website: 'https://nhentai.website'
} as const

export const imageSites = {
    to: 'cdn.dogehls.xyz',
    net: /t[357].nhentai.net/,
    website: 'cdn.dogehls.xyz'
} as const
