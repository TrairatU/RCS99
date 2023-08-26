let appHeader = `
    <header class="header-area header-sticky">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <nav class="main-nav">
                        <a href="index.html" class="logo">
                            <img src="assets/images/logo.png">
                        </a>
                        <ul class="nav">
                            <li><a href="index.html">หน้าแรก</a></li>
                            <li><a href="about.html">เกี่ยวกับเรา</a></li>
                            <li><a href="deals.html">ร้านค้า</a></li>
                        </ul>   
                        <a class="menu-trigger">
                            <span>Menu</span>
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    </header>
`;

let appFooter = `
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                    <p>Copyright © 2036 <a href="#">WoOx Travel</a> Company. All rights reserved.
                        <br>Design: <a href="https://templatemo.com" target="_blank" title="free CSS templates">TemplateMo</a>
                        Distribution: <a href="https://themewagon.com target=" _blank">ThemeWagon</a>
                    </p>
                    </div>
                </div>
            </div>
        </footer>
`;


document.getElementById("app-header").innerHTML = appHeader;
document.getElementById("app-footer").innerHTML = appFooter;