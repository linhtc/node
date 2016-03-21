<style>
    .menu-footer > li.active > a{
        color:#3eb0f7 !important;
    }
</style>
<div class="row">
    <div class="col-md-10">
        <ul class="menu-footer">
            <li><a href="#">Teams Of Use</a></li>
            <li><a href="#">Legal</a></li>
            <li <?php if (isset($site) && $site=='sitemap') { ?>class = "active"<?php } ?>><a  href="/sitemap">Sitemap</a></li>
            <li <?php if (isset($site) && $site=='clients') { ?>class = "active"<?php } ?>><a  href="/clients">Clients</a></li>
            <li><a href="#s">Contact Sales</a></li>
        </ul>
    </div>
    <div class="col-md-2">
        <!-- /.social links -->
        <div class="social text-center">
            <ul>
                <li><a class="wow fadeInUp" href="https://twitter.com/"><i class="fa fa-twitter"></i></a></li>
                <li><a class="wow fadeInUp" href="https://www.facebook.com/" data-wow-delay="0.2s"><i class="fa fa-facebook"></i></a></li>
                <li><a class="wow fadeInUp" href="https://plus.google.com/" data-wow-delay="0.4s"><i class="fa fa-google-plus"></i></a></li>
                <li><a class="wow fadeInUp" href="https://instagram.com/" data-wow-delay="0.6s"><i class="fa fa-instagram"></i></a></li>
            </ul>
        </div>	
        <!--<div class="text-center wow fadeInUp" style="font-size: 14px;">Copyright Backyard 2015 - Template by <a href="http://www.moxdesign.com">MoxDesign</a></div>
        <a href="#" class="scrollToTop"><i class="pe-7s-up-arrow pe-va"></i></a>-->
    </div>	
</div>