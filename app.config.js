const serverURL = Object.is(process.env.NODE_ENV, 'production') ? 'https://api.ushiyihao.com/useeproject02/interface/' : 'http://api.usee1.com.cn/useeproject/interface/'

module.exports = {
	staticURL: 'https://static.ushiyihao.com/',
	serverURL
}
