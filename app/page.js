export default function HomePage() {
    return (
        <>
            <div className="header">
                <div className="container clearfix">
                    <div className="logo leftfix">
                        <img src="/images/logo.png" alt="尚品汇"/>
                    </div>
                    <div className="search rightfix">
                        <form action="#">
                            <input type="text"/>
                            <button></button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="main-nav">
                <div className="container clearfix">
                    <div className="all-types leftfix">全部商品分类</div>
                    <ul className="main-nav-list leftfix ">
                        <li><a href="#">尚品超市</a></li>
                        <li><a href="#">优惠券</a></li>
                        <li><a href="#">买啥</a></li>
                        <li><a href="#">尚品家电</a></li>
                        <li><a href="#">尚品生鲜</a></li>
                        <li><a href="#">plus会员</a></li>
                        <li><a href="#">进口好物</a></li>
                        <li><a href="#">品牌闪购</a></li>
                        <li><a href="#">拍卖</a></li>
                        <li><a href="#">五金店</a></li>
                    </ul>
                </div>
            </div>

            <div className="main-content">
                <div className="container clearfix">
                    <ul className="slide-nav leftfix">
                        <li><a href="#">手机/运营商/数码</a></li>
                        <li><a href="#">电脑/办公</a></li>
                        <li><a href="#">家具/家居/家装/厨具</a></li>
                        <li><a href="#">男装/女装/童装/内衣</a></li>
                        <li><a href="#">美妆/个护清洁/宠物</a></li>
                        <li><a href="#">女鞋/箱包/钟表/珠宝</a></li>
                        <li><a href="#">男鞋/运动/户外</a></li>
                        <li><a href="#">房产/汽车/汽车用品</a></li>
                        <li><a href="#">母婴/玩具乐器</a></li>
                        <li><a href="#">食品/酒类/生鲜/特产</a></li>
                        <li><a href="#">艺术/礼品鲜花/农资绿植</a></li>
                        <li><a href="#">医药保健/计生情趣</a></li>
                        <li><a href="#">图书/文娱/教育/电子书</a></li>
                        <li><a href="#">机票/酒店/旅游/生活</a></li>
                        <li><a href="#">众筹/白条/保险/企业金融</a></li>
                        <li><a href="#">安装/维修/清洗/二手</a></li>
                    </ul>
                    <div className="banner leftfix">2</div>
                    <div className="slide-other leftfix">3</div>
                </div>
            </div>
        </>
    );
}