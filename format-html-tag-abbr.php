<?php
/**
 * Plugin Name: abbr Tag: Gutenberg
 * Plugin URI: https://krisbunda.com/blog/about/portfolio/code
 * Description: Easily add the HTML abbreviation or acronym "abbr" tag to text in Wordpress Gutenberg blocks by hilighting the text and clicking the "Abbreviation" button in the toolbar. 
 * Version: 1.0
 * Author: Kris Bunda
 * Author URI: https://krisbunda.com/blog/about
 */

 function format_html_tag_abbr_script_register() {
   wp_register_script(
     'format-html-tag-abbr-js',
     plugins_url( 'format-html-tag-abbr.js', __FILE__ ),
     array( 'wp-rich-text', 'wp-element', 'wp-editor', 'wp-data' )
   );
 }
 add_action ( 'init', 'format_html_tag_abbr_script_register' );

 function format_html_tag_abbr_enqueue_assets_editor() {
   wp_enqueue_script( 'format-html-tag-abbr-js' );
 }
 add_action( 'enqueue_block_editor_assets', 'format_html_tag_abbr_enqueue_assets_editor' );

?>