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
                        <li>
                            <a href="#">手机/运营商/数码</a>
                            <div className="second-menu">
                                <dl className="clearfix">
                                    <dt><a href="#">电子书刊</a></dt>
                                    <dd><a href="#">电子书</a></dd>
                                    <dd><a href="#">网络原创</a></dd>
                                    <dd><a href="#">数字杂志</a></dd>
                                    <dd><a href="#">多媒体图书</a></dd>
                                </dl>
                                <dl className="clearfix">
                                    <dt><a href="#">音像</a></dt>
                                    <dd><a href="#">音乐</a></dd>
                                    <dd><a href="#">影视</a></dd>
                                    <dd><a href="#">教育音像</a></dd>
                                </dl>
                                <dl className="clearfix">
                                    <dt><a href="#">英文原版</a></dt>
                                    <dd><a href="#">少儿</a></dd>
                                    <dd><a href="#">商务投资</a></dd>
                                    <dd><a href="#">英语学习考试</a></dd>
                                    <dd><a href="#">文学</a></dd>
                                    <dd><a href="#">传记</a></dd>
                                    <dd><a href="#">励志</a></dd>
                                </dl>
                                <dl className="clearfix">
                                    <dt><a href="#">文艺</a></dt>
                                    <dd><a href="#">小说</a></dd>
                                    <dd><a href="#">文学</a></dd>
                                    <dd><a href="#">青春文学</a></dd>
                                    <dd><a href="#">传记</a></dd>
                                    <dd><a href="#">艺术</a></dd>
                                </dl>
                                <dl className="clearfix">
                                    <dt><a href="#">少儿</a></dt>
                                    <dd><a href="#">胎教</a></dd>
                                    <dd><a href="#">0-2岁</a></dd>
                                    <dd><a href="#">3-6岁</a></dd>
                                    <dd><a href="#">7-10岁</a></dd>
                                    <dd><a href="#">11-14岁</a></dd>
                                </dl>
                                <dl className="clearfix">
                                    <dt><a href="#">人文社科</a></dt>
                                    <dd><a href="#">历史</a></dd>
                                    <dd><a href="#">哲学</a></dd>
                                    <dd><a href="#">国学</a></dd>
                                    <dd><a href="#">政治/军事</a></dd>
                                    <dd><a href="#">法律</a></dd>
                                    <dd><a href="#">人文社科</a></dd>
                                    <dd><a href="#">心理学</a></dd>
                                    <dd><a href="#">文化</a></dd>
                                    <dd><a href="#">社会科学</a></dd>
                                </dl>
                                <dl className="clearfix">
                                    <dt><a href="#">经管励志</a></dt>
                                    <dd><a href="#">经济</a></dd>
                                    <dd><a href="#">金融与投资</a></dd>
                                    <dd><a href="#">管理</a></dd>
                                    <dd><a href="#">励志与成功</a></dd>
                                </dl>
                                <dl className="clearfix">
                                    <dt><a href="#">生活</a></dt>
                                    <dd><a href="#">健康与保健</a></dd>
                                    <dd><a href="#">家庭与育儿</a></dd>
                                    <dd><a href="#">旅游</a></dd>
                                    <dd><a href="#">烹饪美食</a></dd>
                                </dl>
                                <dl className="clearfix">
                                    <dt><a href="#">科技</a></dt>
                                    <dd><a href="#">工业技术</a></dd>
                                    <dd><a href="#">科普读物</a></dd>
                                    <dd><a href="#">建筑</a></dd>
                                    <dd><a href="#">医学</a></dd>
                                    <dd><a href="#">科学与自然</a></dd>
                                    <dd><a href="#">计算机与互联网</a></dd>
                                    <dd><a href="#">电子通信</a></dd>
                                </dl>
                                <dl className="clearfix">
                                    <dt><a href="#">教育</a></dt>
                                    <dd><a href="#">中小学教辅</a></dd>
                                    <dd><a href="#">教育与考试</a></dd>
                                    <dd><a href="#">外语学习</a></dd>
                                    <dd><a href="#">大中专教材</a></dd>
                                    <dd><a href="#">科学与自然</a></dd>
                                    <dd><a href="#">字典词典</a></dd>
                                </dl>
                                <dl className="clearfix">
                                    <dt><a href="#">艺术与收藏</a></dt>
                                    <dd><a href="#">经济管理</a></dd>
                                    <dd><a href="#">文化与艺术</a></dd>
                                </dl>
                                <dl className="clearfix">
                                    <dt><a href="#">其他</a></dt>
                                    <dd><a href="#">工具书</a></dd>
                                    <dd><a href="#">杂志期刊</a></dd>
                                    <dd><a href="#">套装书</a></dd>
                                    <dd><a href="#">打折图书</a></dd>
                                </dl>
                            </div>
                        </li>
                        <li>
                            <a href="#">电脑/办公</a>
                            <div className="second-menu">
                                <dl className="clearfix">
                                    <dt><a href="#">手机通讯</a></dt>
                                    <dd><a href="#">手机</a></dd>
                                    <dd><a href="#">对讲机</a></dd>
                                </dl>
                                <dl className="clearfix">
                                    <dt><a href="#">运营商</a></dt>
                                    <dd><a href="#">合约机</a></dd>
                                    <dd><a href="#">选号中心</a></dd>
                                    <dd><a href="#">装宽带</a></dd>
                                </dl>
                                <dl className="clearfix">
                                    <dt><a href="#">手机配件</a></dt>
                                    <dd><a href="#">移动电源</a></dd>
                                    <dd><a href="#">蓝牙耳机</a></dd>
                                    <dd><a href="#">充电器</a></dd>
                                    <dd><a href="#">数据线</a></dd>
                                    <dd><a href="#">苹果周边</a></dd>
                                </dl>
                            </div>
                        </li>
                        <li>
                            <a href="#">家具/家居/家装/厨具</a>
                            <div className="second-menu">
                                <dl className="clearfix">
                                    <dt><a href="#">大家电</a></dt>
                                    <dd><a href="#">平板电视</a></dd>
                                    <dd><a href="#">空调</a></dd>
                                    <dd><a href="#">冰箱</a></dd>
                                    <dd><a href="#">洗衣机</a></dd>
                                    <dd><a href="#">迷你音响</a></dd>
                                </dl>
                                <dl className="clearfix">
                                    <dt><a href="#">厨卫家电</a></dt>
                                    <dd><a href="#">燃气灶</a></dd>
                                    <dd><a href="#">油烟机</a></dd>
                                    <dd><a href="#">热水器</a></dd>
                                    <dd><a href="#">消毒柜</a></dd>
                                    <dd><a href="#">洗碗机</a></dd>
                                </dl>
                                <dl className="clearfix">
                                    <dt><a href="#">厨卫小电</a></dt>
                                    <dd><a href="#">料理机</a></dd>
                                    <dd><a href="#">榨汁机</a></dd>
                                    <dd><a href="#">电饭煲</a></dd>
                                    <dd><a href="#">压力锅</a></dd>
                                    <dd><a href="#">豆浆机</a></dd>
                                    <dd><a href="#">咖啡机</a></dd>
                                    <dd><a href="#">微波炉</a></dd>
                                    <dd><a href="#">电磁炉</a></dd>
                                </dl>
                                <dl className="clearfix">
                                    <dt><a href="#">生活电器</a></dt>
                                    <dd><a href="#">取暖电器</a></dd>
                                    <dd><a href="#">净化器</a></dd>
                                    <dd><a href="#">加湿器</a></dd>
                                    <dd><a href="#">扫地机器人</a></dd>
                                    <dd><a href="#">吸尘器</a></dd>
                                    <dd><a href="#">挂烫机</a></dd>
                                    <dd><a href="#">电话机</a></dd>
                                    <dd><a href="#">电风扇</a></dd>
                                </dl>
                                <dl className="clearfix">
                                    <dt><a href="#">个护健康</a></dt>
                                    <dd><a href="#">剃须刀</a></dd>
                                    <dd><a href="#">脱毛器</a></dd>
                                    <dd><a href="#">口腔护理</a></dd>
                                    <dd><a href="#">电吹风</a></dd>
                                    <dd><a href="#">美容仪</a></dd>
                                    <dd><a href="#">理发器</a></dd>
                                    <dd><a href="#">按摩椅</a></dd>
                                    <dd><a href="#">血压计</a></dd>
                                </dl>
                            </div>
                        </li>
                        <li>
                            <a href="#">男装/女装/童装/内衣</a>
                            <div className="second-menu">
                                <dl className="clearfix">
                                    <dt><a href="#">摄影摄像</a></dt>
                                    <dd><a href="#">数码现货即</a></dd>
                                    <dd><a href="#">拍立得</a></dd>
                                    <dd><a href="#">镜头</a></dd>
                                    <dd><a href="#">户外器材</a></dd>
                                    <dd><a href="#">数码相框</a></dd>
                                </dl>
                                <dl className="clearfix">
                                    <dt><a href="#">数码配件</a></dt>
                                    <dd><a href="#">存储卡</a></dd>
                                    <dd><a href="#">读卡器</a></dd>
                                    <dd><a href="#">滤镜</a></dd>
                                    <dd><a href="#">相机包</a></dd>
                                    <dd><a href="#">数码支架</a></dd>
                                </dl>
                                <dl className="clearfix">
                                    <dt><a href="#">智能设备</a></dt>
                                    <dd><a href="#">智能手环</a></dd>
                                    <dd><a href="#">智能眼镜</a></dd>
                                    <dd><a href="#">健康监测</a></dd>
                                    <dd><a href="#">体感车</a></dd>
                                    <dd><a href="#">无人机</a></dd>
                                </dl>
                            </div>
                        </li>
                        <li>
                            <a href="#">美妆/个护清洁/宠物</a>
                            <div className="second-menu">
                                <dl className="clearfix">
                                    <dt><a href="#">宠物生活</a></dt>
                                    <dd><a href="#">宠物粮食</a></dd>
                                    <dd><a href="#">宠物零食</a></dd>
                                    <dd><a href="#">医疗保健</a></dd>
                                    <dd><a href="#">宠物玩具</a></dd>
                                    <dd><a href="#">出行装备</a></dd>
                                </dl>
                                <dl className="clearfix">
                                    <dt><a href="#">生活日用</a></dt>
                                    <dd><a href="#">保暖防护</a></dd>
                                    <dd><a href="#">收纳用品</a></dd>
                                    <dd><a href="#">雨伞雨具</a></dd>
                                    <dd><a href="#">浴室用品</a></dd>
                                    <dd><a href="#">洗漱用品</a></dd>
                                </dl>
                            </div>
                        </li>
                        <li>
                            <a href="#">女鞋/箱包/钟表/珠宝</a>
                            <div className="second-menu">
                                <dl className="clearfix">
                                    <dt><a href="#">电脑整机</a></dt>
                                    <dd><a href="#">笔记本电脑</a></dd>
                                    <dd><a href="#">台式机</a></dd>
                                    <dd><a href="#">超极本</a></dd>
                                    <dd><a href="#">游戏本</a></dd>
                                    <dd><a href="#">平板电脑</a></dd>
                                    <dd><a href="#">平板配件</a></dd>
                                </dl>
                                <dl className="clearfix">
                                    <dt><a href="#">电脑配件</a></dt>
                                    <dd><a href="#">CPU</a></dd>
                                    <dd><a href="#">主板</a></dd>
                                    <dd><a href="#">显卡</a></dd>
                                    <dd><a href="#">硬盘</a></dd>
                                    <dd><a href="#">SSD固态硬盘</a></dd>
                                    <dd><a href="#">内存</a></dd>
                                </dl>
                            </div>
                        </li>
                        <li>
                            <a href="#">男鞋/运动/户外</a>
                            <div className="second-menu">
                                <dl className="clearfix">
                                    <dt><a href="#">刀剪菜板</a></dt>
                                    <dd><a href="#">菜刀</a></dd>
                                    <dd><a href="#">剪刀</a></dd>
                                    <dd><a href="#">多功能刀</a></dd>
                                    <dd><a href="#">道具套装</a></dd>
                                </dl>
                                <dl className="clearfix">
                                    <dt><a href="#">水具酒具</a></dt>
                                    <dd><a href="#">塑料杯</a></dd>
                                    <dd><a href="#">运动水壶</a></dd>
                                    <dd><a href="#">保温杯</a></dd>
                                    <dd><a href="#">保温壶</a></dd>
                                </dl>
                            </div>
                        </li>
                        <li>
                            <a href="#">房产/汽车/汽车用品</a>
                            <div className="second-menu">
                                <dl className="clearfix">
                                    <dt><a href="#">清洁用品</a></dt>
                                    <dd><a href="#">纸巾湿巾</a></dd>
                                    <dd><a href="#">清洁工具</a></dd>
                                    <dd><a href="#">驱虫用品</a></dd>
                                    <dd><a href="#">家庭清洁</a></dd>
                                    <dd><a href="#">皮具护理</a></dd>
                                </dl>
                                <dl className="clearfix">
                                    <dt><a href="#">面部护肤</a></dt>
                                    <dd><a href="#">洁面乳</a></dd>
                                    <dd><a href="#">面膜</a></dd>
                                    <dd><a href="#">防晒</a></dd>
                                    <dd><a href="#">隔离</a></dd>
                                    <dd><a href="#">爽肤水</a></dd>
                                </dl>
                            </div>
                        </li>
                        <li>
                            <a href="#">母婴/玩具乐器</a>
                            <div className="second-menu">
                                <dl className="clearfix">
                                    <dt><a href="#">男装</a></dt>
                                    <dd><a href="#">衬衫</a></dd>
                                    <dd><a href="#">针织衫</a></dd>
                                    <dd><a href="#">夹克</a></dd>
                                    <dd><a href="#">风衣</a></dd>
                                    <dd><a href="#">牛仔裤</a></dd>
                                </dl>
                                <dl className="clearfix">
                                    <dt><a href="#">女装</a></dt>
                                    <dd><a href="#">雪纺衫</a></dd>
                                    <dd><a href="#">休闲裤</a></dd>
                                    <dd><a href="#">小西装</a></dd>
                                    <dd><a href="#">皮衣</a></dd>
                                    <dd><a href="#">羽绒服</a></dd>
                                </dl>
                            </div>
                        </li>
                        <li>
                            <a href="#">食品/酒类/生鲜/特产</a>
                            <div className="second-menu">
                                <dl className="clearfix">
                                    <dt><a href="#">钟表</a></dt>
                                    <dd><a href="#">男表</a></dd>
                                    <dd><a href="#">瑞士表</a></dd>
                                    <dd><a href="#">女表</a></dd>
                                    <dd><a href="#">风衣</a></dd>
                                    <dd><a href="#">智能手表</a></dd>
                                    <dd><a href="#">闹钟</a></dd>
                                </dl>
                            </div>
                        </li>
                        <li>
                            <a href="#">艺术/礼品鲜花/农资绿植</a>
                            <div className="second-menu">
                                <dl className="clearfix">
                                    <dt><a href="#">流行男鞋</a></dt>
                                    <dd><a href="#">休闲鞋</a></dd>
                                    <dd><a href="#">商务鞋</a></dd>
                                    <dd><a href="#">功能鞋</a></dd>
                                    <dd><a href="#">布鞋</a></dd>
                                    <dd><a href="#">人字拖</a></dd>
                                </dl>
                                <dl className="clearfix">
                                    <dt><a href="#">时尚女鞋</a></dt>
                                    <dd><a href="#">高跟鞋</a></dd>
                                    <dd><a href="#">凉鞋</a></dd>
                                    <dd><a href="#">雪地靴</a></dd>
                                    <dd><a href="#">筒靴</a></dd>
                                    <dd><a href="#">内增高</a></dd>
                                </dl>
                            </div>
                        </li>
                        <li>
                            <a href="#">医药保健/计生情趣</a>
                            <div className="second-menu">
                                <dl className="clearfix">
                                    <dt><a href="#">营养辅食</a></dt>
                                    <dd><a href="#">维生素</a></dd>
                                    <dd><a href="#">面条</a></dd>
                                    <dd><a href="#">益生菌</a></dd>
                                    <dd><a href="#">钙铁锌硒</a></dd>
                                    <dd><a href="#">DHA</a></dd>
                                </dl>
                                <dl className="clearfix">
                                    <dt><a href="#">妈妈专区</a></dt>
                                    <dd><a href="#">孕妇装</a></dd>
                                    <dd><a href="#">孕妇护肤</a></dd>
                                    <dd><a href="#">防辐射服</a></dd>
                                    <dd><a href="#">产后塑身</a></dd>
                                    <dd><a href="#">月子装</a></dd>
                                </dl>
                            </div>
                        </li>
                        <li>
                            <a href="#">图书/文娱/教育/电子书</a>
                            <div className="second-menu">
                                <dl className="clearfix">
                                    <dt><a href="#">流行皮包</a></dt>
                                    <dd><a href="#">钱包</a></dd>
                                    <dd><a href="#">手包</a></dd>
                                    <dd><a href="#">钥匙包</a></dd>
                                    <dd><a href="#">手提包</a></dd>
                                    <dd><a href="#">公文包</a></dd>
                                </dl>
                                <dl className="clearfix">
                                    <dt><a href="#">婚庆</a></dt>
                                    <dd><a href="#">婚庆首饰</a></dd>
                                    <dd><a href="#">婚纱摄影</a></dd>
                                    <dd><a href="#">婚宴</a></dd>
                                    <dd><a href="#">婚庆服务</a></dd>
                                    <dd><a href="#">婚纱礼服</a></dd>
                                </dl>
                            </div>
                        </li>
                        <li>
                            <a href="#">机票/酒店/旅游/生活</a>
                            <div className="second-menu">
                                <dl className="clearfix">
                                    <dt><a href="#">地方特产</a></dt>
                                    <dd><a href="#">北京</a></dd>
                                    <dd><a href="#">新疆</a></dd>
                                    <dd><a href="#">四川</a></dd>
                                    <dd><a href="#">福建</a></dd>
                                    <dd><a href="#">重庆</a></dd>
                                </dl>
                                <dl className="clearfix">
                                    <dt><a href="#">进口食品</a></dt>
                                    <dd><a href="#">饼干果干</a></dd>
                                    <dd><a href="#">巧克力</a></dd>
                                    <dd><a href="#">牛奶</a></dd>
                                    <dd><a href="#">调味食品</a></dd>
                                    <dd><a href="#">休闲零食</a></dd>
                                </dl>
                            </div>
                        </li>
                        <li>
                            <a href="#">众筹/白条/保险/企业金融</a>
                            <div className="second-menu">
                                <dl className="clearfix">
                                    <dt><a href="#">木手串</a></dt>
                                    <dd><a href="#">小叶紫檀</a></dd>
                                    <dd><a href="#">黄花梨</a></dd>
                                    <dd><a href="#">禅香木</a></dd>
                                    <dd><a href="#">金丝楠</a></dd>
                                </dl>
                                <dl className="clearfix">
                                    <dt><a href="#">钻石</a></dt>
                                    <dd><a href="#">裸钻</a></dd>
                                    <dd><a href="#">钻戒</a></dd>
                                    <dd><a href="#">耳饰</a></dd>
                                    das
                                    <dd><a href="#">手镯</a></dd>
                                    <dd><a href="#">手链</a></dd>
                                </dl>
                            </div>
                        </li>
                        <li>
                            <a href="#">安装/维修/清洗/二手</a>
                            <div className="second-menu">
                                <dl className="clearfix">
                                    <dt><a href="#">二手家电</a></dt>
                                    <dd><a href="#">洗衣机</a></dd>
                                    <dd><a href="#">烘干机</a></dd>
                                    <dd><a href="#">烤箱</a></dd>
                                    <dd><a href="#">微波炉</a></dd>
                                </dl>
                                <dl className="clearfix">
                                    <dt><a href="#">上门清洗</a></dt>
                                    <dd><a href="#">油烟机</a></dd>
                                    <dd><a href="#">橱柜</a></dd>
                                    <dd><a href="#">灶台</a></dd>
                                    <dd><a href="#">锅</a></dd>
                                    <dd><a href="#">燃气灶</a></dd>
                                </dl>
                            </div>
                        </li>
                    </ul>
                    <div className="banner leftfix">
                        <img src="/images/banner主图.png" alt=""/>
                    </div>
                    <div className="slide-other leftfix">
                        <div className="message">
                            <div className="title clearfix">
                                <span className="leftfix">尚品快报</span>
                                <a href="#" className="rightfix">更多&nbsp;&gt;</a>
                            </div>
                            <ul className="msg-list">
                                <li><a href="#">[特惠] 毛衣+直筒裤才是YYDS</a></li>
                                <li><a href="#">[特惠] 毛衣+直筒裤才是YYDS</a></li>
                                <li><a href="#">[特惠] 毛衣+直筒裤才是YYDS</a></li>
                                <li><a href="#">[特惠] 毛衣+直筒裤才是YYDS</a></li>
                            </ul>
                        </div>
                        <div className="other-nav">
                            <ul className="other-nav-list clearfix">
                                <li>
                                    <div className="picture"></div>
                                    <span>话费</span>
                                </li>
                                <li>
                                    <div className="picture"></div>
                                    <span>话费</span>
                                </li>
                                <li>
                                    <div className="picture"></div>
                                    <span>话费</span>
                                </li>
                                <li>
                                    <div className="picture"></div>
                                    <span>话费</span>
                                </li>
                            </ul>
                            <ul className="other-nav-list clearfix">
                                <li>
                                    <div className="picture"></div>
                                    <span>话费</span>
                                </li>
                                <li>
                                    <div className="picture"></div>
                                    <span>话费</span>
                                </li>
                                <li>
                                    <div className="picture"></div>
                                    <span>话费</span>
                                </li>
                                <li>
                                    <div className="picture"></div>
                                    <span>话费</span>
                                </li>
                            </ul>
                            <ul className="other-nav-list clearfix">
                                <li>
                                    <div className="picture"></div>
                                    <span>话费</span>
                                </li>
                                <li>
                                    <div className="picture"></div>
                                    <span>话费</span>
                                </li>
                                <li>
                                    <div className="picture"></div>
                                    <span>话费</span>
                                </li>
                                <li>
                                    <div className="picture"></div>
                                    <span>话费</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}