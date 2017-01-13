(function ($, Drupal, undefined) {
    Drupal.behaviors.ggproject = {
        attach: function (context, settings) {

            var myjsonObject = new Object(),
                siteURL = 'http://showgirls.dev/admin/import-remote/json?get_article=';

            function getImageSize(url){
                var promise = $.Deferred();

                $('<img/>').attr('src', url).load(function(){
                    var myObject = {
                        orgWidth: this.width,
                        orgHeight: this.height
                    };
                    promise.resolve(myObject)
                });
                return promise;
            }

            function testImg(string) {
                var regexp = /https?:\/\/[^ ]+?(?:\.jpg|\.png|\.gif)/

                if (regexp.test(string)) {
                    return true;
                }
            }

            function extractDomain(url) {
                var domain;
                if (url.indexOf("://") > -1) {
                    domain = url.split('/')[2];
                }
                else {
                    domain = url.split('/')[0];
                }
                domain = domain.split(':')[0];

                return domain;
            }

            function getDataFromVk ($url) {
                $.ajaxPrefilter( function (options) {

                    if (options.crossDomain && jQuery.support.cors) {
                        var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
                        options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
                        //options.url = "http://cors.corsproxy.io/url=" + options.url;
                    }
                });

                $.get(
                    $url,
                    function (response) {
                        var html = $.parseHTML(response);
                        links = $(html).find('.page_post_sized_thumbs.clear_fix a');
                        title = $(html).filter('title').text();

                        var imagesURL = [];
                        $table = '<table width="100%" border="1">';
                        var c = 0;

                        links.each(function( index ) {
                            var $this = $(this),
                                $data = $this.attr("onclick");
                            $data = $data.substring($data.indexOf("{")+1,$data.lastIndexOf("}"));
                            $data = $data.substring($data.indexOf("{"),$data.lastIndexOf("}")+1);
                            $json = JSON.parse($data);

                            $base = $json.base;

                            if ($json.z_ && $json.z_[0]) {
                                imagesURL[c] = ($json.base + $json.z_[0] + '.jpg');
                                size = getImageSize(imagesURL[c]);
                                console.log(size.orgWidth);
                                $table = $table + '<tr> <td><img src="' +  imagesURL[c] + '"></td><td>' + size.orgWidth + ' x ' + size.orgHeight + '</td> <td><input name="" type="text" value="' +  imagesURL[c] + '"></td> <td><input name="" type="checkbox" value="" checked="checked"></td></tr>'
                            } else if ($json.y_ && $json.y_[0]) {
                                imagesURL[c] = ($json.base + $json.y_[0] + '.jpg');
                                size = getImageSize(imagesURL[c]);
                                $table = $table + '<tr> <td><img src="' +  imagesURL[c] + '"></td><td>' + size.orgWidth + ' x ' + size.orgHeight + '</td> <td><input name="" type="text" value="' +  imagesURL[c] + '"></td> <td><input name="" type="checkbox" value="" checked="checked"></td></tr>'
                            } else if ($json.x_ && $json.x_[0]) {
                                imagesURL[c] = ($json.base + $json.x_[0] + '.jpg');
                                size = getImageSize(imagesURL[c]);
                                $table = $table + '<tr> <td><img src="' +  imagesURL[c] + '"></td><td>' + size.orgWidth + ' x ' + size.orgHeight + '</td> <td><input name="" type="text" value="' +  imagesURL[c] + '"></td> <td><input name="" type="checkbox" value="" checked="checked"></td></tr>'
                            } else if ($json.w_ && $json.w_[0]) {
                                imagesURL[c] = ($json.base + $json.w_[0] + '.jpg');
                                size = getImageSize(imagesURL[c]);
                                $table = $table + '<tr> <td><img src="' +  imagesURL[c] + '"></td><td>' + size.orgWidth + ' x ' + size.orgHeight + '</td> <td><input name="" type="text" value="' +  imagesURL[c] + '"></td> <td><input name="" type="checkbox" value="" checked="checked"></td></tr>'
                            }
                            c = c + 1;
                        });

                        $table = $table + '</table><a href="#" class="makejson">Make!</a>';
                        $('.table-holder').html($table);

                        myjsonObject.url = $url;
                        myjsonObject.title = title;
                    });
            }

            function getDataFromAny ($url) {
                $.ajaxPrefilter( function (options) {

                    if (options.crossDomain && jQuery.support.cors) {
                        var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
                        options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
                        //options.url = "http://cors.corsproxy.io/url=" + options.url;
                    }
                });

                $.get(
                    $url,
                    function (response) {
                        var html = $.parseHTML(response);
                        title = $(html).filter('title').text();

                        var $el =  $(html).find('div, a, img');
                        var imagesURL = [];
                        var $table = '<table width="100%" border="1">';
                        var c = 0;

                        $el.each(function( index ) {
                            var $this = $(this),
                                style = $this.attr('style'),
                                href= $this.attr('href'),
                                src = $this.attr('src');

                            if (style) {
                                if (testImg(style)) {
                                    console.log(style);
                                    $table = $table + '<tr> <td><img src="' +  style + '"></td><td></td> <td><input name="" type="text" value="' +  imagesURL[c] + '"></td> <td><input name="" type="checkbox" value="""></td></tr>';
                                }
                            } else if (href) {
                                if (testImg(href)) {
                                    console.log(href);
                                    $table = $table + '<tr> <td><img src="' +  href + '"></td><td></td> <td><input name="" type="text" value="' +  imagesURL[c] + '"></td> <td><input name="" type="checkbox" value=""></td></tr>';
                                }
                            } else if (src) {
                                if (testImg(src)) {
                                    console.log(src);
                                    $table = $table + '<tr> <td><img src="' +  src + '"></td><td></td> <td><input name="" type="text" value="' +  imagesURL[c] + '"></td> <td><input name="" type="checkbox" value=""></td></tr>';
                                }
                            }
                        });

                        $table = $table + '</table><a href="#" class="makejson">Make!</a>';
                        $('.table-holder').html($table);

                        myjsonObject.url = $url;
                        myjsonObject.title = title;

                    });
            }

            $(document).on( "click", ".makejson", function() {
                var $tr = $('.table-holder table tr'),
                    imagesURL = [],
                c = 0;

                $tr.each(function( index ) {
                    var $this = $(this),
                        $ck = $this.find('input[type=checkbox]').prop('checked'),
                        $url = $this.find('input[type=text]').val();

                    if ($ck) {
                        c++;
                        imagesURL[c] = $url;
                    }
                });

                //console.log(imagesURL);
                myjsonObject.imgsrc = imagesURL;
                //console.log(myjsonObject);
                var myJsonString = JSON.stringify(myjsonObject);
                targetUrl = encodeURI(siteURL +  myJsonString);
                //console.log(targetUrl = encodeURI(siteURL +  myJsonString));

                window.location.href = targetUrl;
            });

            $(".page-admin-import-remote #content form").submit(function( event ) {
                event.preventDefault();

                var $this = $(this),
                    $url = $this.find('input[type=text]').val();

                if (extractDomain($url) == 'vk.com') {
                    getDataFromVk($url);
                } else {
                    getDataFromAny($url);
                }




            });

            $(document).ready(function() {});

        }
    };
})(jQuery, Drupal);