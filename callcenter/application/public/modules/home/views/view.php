<style>
    .carousel-caption{
        top:0px;
        width:70%;
        margin-left:auto;
        margin-right:auto;
    }
</style>
<script type="text/javascript">
        $(document).ready(function(){
            $(".slidepic").click(function(){
                id = $(this).children("input").val();
                $.each($(".pic"),function(){
                    $(this).css("display","none");
                })
                $("#pic"+id).css("display","");
            })
        })
        
</script>
<div class="row">
    <!-- /.phone image -->
    <div class="col-md-5">
        <img id="pic0" src="images/home1.png" alt="phone" class="pic header-phone img-responsive wow fadeInRight">
        <img id="pic1" src="images/icombine.jpg" alt="phone" class="pic header-phone img-responsive wow fadeInRight" style="display:none;">
        <img id="pic2" src="images/izap.jpg" alt="phone" class=" pic header-phone img-responsive wow fadeInRight" style="display:none;">
    </div>
    <div class="col-md-7">
        <div class="container main-container wow fadeInLeft">
            <div id="carousel-example-generic" class="carousel slide">
                <!-- Indicators -->
                <ol class="carousel-indicators">
                    <li class="slidepic"data-target="#carousel-example-generic" data-slide-to="0" class="active"><input value="0" type="hidden"/></li>
                    <li class="slidepic" data-target="#carousel-example-generic" data-slide-to="1"><input value="1" type="hidden"/></li>
                    <li class="slidepic"data-target="#carousel-example-generic" data-slide-to="2"><input value="2" type="hidden"/></li>
                </ol>
                                                            
                <!-- Wrapper for slides -->
                <div class="carousel-inner" role="listbox">
                    <!-- First slide -->
                    <div class="item active ">
                        <div class="carousel-caption">
                            <h1 data-animation="animated bounceInLeft">
                                Greystone Data Teach
                            </h1>
                            <p>
                                Greystone Data Tech is an engineering company that provides innovative technology solutions for any of your industry needs from mobile device tetsing to security imaging technology
                            </p>
                        </div>
                    </div> <!-- /.item -->
                                                                    
                    <!-- Second slide -->
                    <div class="item ">
                        <div class="carousel-caption">
                            <h1 data-animation="animated bounceInLeft">
                                iCombine
                            </h1>
                            <p>
                                The iCombine is an advanced all-inclusive mobile testing device that runs various applications from diagnosing functional capacity and grading cosmetic condition to transferring and deleting all device data
                            </p>
                        </div>
                    </div><!-- /.item -->
                                                                    
                    <!-- Third slide -->
                    <div class="item ">
                        <div class="carousel-caption">
                            <h1 data-animation="animated bounceInLeft">
                                iZap
                            </h1>
                            <p>
                                The iZap facilitates the mobile device trade-in process at retail stores by allowing employees to test the traded-in device, while transferring date then deleting previous customer data from the old device all in store
                            </p>
                        </div>
                    </div><!-- /.item -->			
                </div><!-- /.carousel-inner -->
            </div><!-- /.carousel -->
        </div>
    </div><!--<div class="col-md-7">--> 
</div>