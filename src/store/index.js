// 约定信息的key是 hm-toutiao-77-ueser\
// 定一个存储信息的值 字符串格式表示的对象--JSON,这里信息是请求数据中的data的所有信息

const KEY = ' hm-toutiao-77-ueser'

export default {
  setUser (user) {
    //    存储用户信息到sessionstorige 里
    window.sessionStorage.setItem(KEY, JSON.stringify(user))
  },
  getUser () {
    // 过去用户信息从sessionstorige
    return JSON.parse(window.sessionStorage.getItem(KEY) || '{}')
  },
  clearUser () {
    window.sessionStorage.removeItem(KEY)
  }
}
