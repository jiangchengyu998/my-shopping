export default function HomePage() {
    return (
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
    );
}