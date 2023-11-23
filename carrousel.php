<?php
/**
 * Template part for displaying results in search pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Fleurs_d\'oranger_&_Chats_errants
 */

?>

<div class="main-character"> 
    <h3>Les personnages</h3>
    <swiper-container class="mySwiper" pagination="true" effect="coverflow" grab-cursor="true" centered-slides="true"
    slides-per-view="auto" coverflow-effect-rotate="50" coverflow-effect-stretch="0" coverflow-effect-depth="100"
    coverflow-effect-modifier="1" coverflow-effect-slide-shadows="true"> 
        <swiper-slide">
            <?php
            $main_character = $characters_query->posts[0];
            echo '<figure>';
            echo get_the_post_thumbnail( $main_character->ID, 'full' );
            echo '<figcaption>'. $main_character->post_title . '</figcaption>';
            echo '</figure>';
            $characters_query->next_post();
            ?>
        </swiper-slide>
            <?php
            while ( $characters_query->have_posts() ) {
                $characters_query->the_post();
            ?>
                <swiper-slide>
                <figure>
                <?php
                echo get_the_post_thumbnail( get_the_ID(), 'full' );
                ?>
                <figcaption>
                <?php
                the_title();
                ?>
                </figcaption>
                </figure>
            <?php
            }
            ?>
        </swiper-slide>  
    </swiper-container>
</div>

