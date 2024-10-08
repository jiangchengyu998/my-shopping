import "../public/css/index.css"
import "../public/css/reset.css"

export const metadata = {
    title: '尚品汇',
    description: 'Generated by Next.js',
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body>
        <div className="topbar">
            <div className="container clearfix">
                <div className="welcome leftfix">
                    <span className="hello">尚品汇欢迎您</span>
                    <span>请</span>
                    <a className="login">登录</a>
                    <a className="register">免费注册</a>
                </div>
                <div className="topbar-nav rightfix">
                    <ul className="list clearfix">
                        <li><a href="#">我的订单</a></li>
                        <li><a href="#">我的购物车</a></li>
                        <li><a href="#">我的尚品汇</a></li>
                        <li><a href="#">尚品汇会员</a></li>
                        <li><a href="#">企业采购</a></li>
                        <li><a href="#">关注尚品汇</a></li>
                        <li><a href="#">合作招商</a></li>
                        <li><a href="#">商家后台</a></li>
                    </ul>
                </div>
            </div>
        </div>
        {children}

        <footer>My Website Footer</footer>

        </body>
        </html>
    )
}
