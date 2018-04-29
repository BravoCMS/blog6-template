
<{if count($data)}>
    <div class="goods">
        <h2>{goods}</h2>
        <{foreach $data as $g}>
            <div class="short_news">
                <div class="short_img"><a href="<{$g.link}>"><img src="<{$g.photo_file_small}>" alt="" border="0"></a></div>
                <div class="clear_img"></div>

                <div class="short_info">
                    <div class="short_part_number">{item_code} <span><{$g.part_number}></span></div>
                    <div class="short_clear_part_number"></div>
                    <div class="short_brand"><a class="product_brand" href="<{$g.link}>"><{$g.brand_name}></a></div>
                    <div class="clear_brand"></div>
                    <div class="short_title"><a class="product_description" href="<{$g.link}>"><{$g.service_name}></a></div>
                    <div class="clear_title"></div>
                    <div class="short_available"></div>
                    <div class="clear_available"></div>
                    <div class="short_price">
                        <{if $g.to}>
                            <{$g.to}>
                            <span><{$valuta.short_name}></span>
                        <{/if}>
                    </div>
                    <div class="clear_price"></div>
                    <div class="old_price"></div>
                    <div class="clear_old_price"></div>
                    <div class="short_buy">
                        <{if $g.order_counter}>
                            <p class='min_order min_order<{if $g.order_min}><{$g.order_min}><{else}>1<{/if}>'>{min_order} <span><{if $g.order_min}><{$g.order_min}><{else}>1<{/if}></span></p>
                        <{/if}>
                        <a href="#buy" class="order basket-buy" title="{to_buy} <{$g.brand_name}> <{$g.service_name}>">{to_buy}</a>

                        <input type="hidden" class="product-number-input basket-count" sid="<{$g.service_clinic_id}>" uid="" min="<{if $g.order_min}><{$g.order_min}><{else}>1<{/if}>" step="1" value="<{if $g.order_min}><{$g.order_min}><{else}>1<{/if}>" />
                        <div class="product-number-btn-up basket-count-up hidden"></div>
                        <div class="product-number-btn-dwn basket-count-down hidden"></div>
                    </div>
                    <div class="clear_buy"></div>
                    <div class="short_favorites"><{$g.favorite}></div>
                    <div class="clear_favorites"></div>
                    <div class="short_compare compare" scid="<{$g.service_clinic_id}>" compare="{compare}" compared="{compared}"></div>
                    <div class="clear_compare"></div>
                    <div class="short_description"><{$g.good_description_short}></div>
                    <div class="short_link"><a href="<{$g.link}>">читать далее</a></div>
                </div>

            </div>
        <{/foreach}>
    </div>
<{/if}>
