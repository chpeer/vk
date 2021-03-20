=== Edin ===

Contributors: automattic
Tags: blue, gray, white, light, two-columns, left-sidebar, right-sidebar, responsive-layout, custom-background, custom-colors, custom-header, custom-menu, editor-style, featured-images, flexible-header, full-width-template, post-formats, rtl-language-support, sticky-post, theme-options, translation-ready

Requires at least: 3.5
Tested up to: 3.9
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

A modern business theme.

== Description ==

Edin is a fully responsive theme, ideal for creating a strong — yet beautiful — online presence for your business.

* Responsive layout.
* Front Page Template.
* Full Width Page Template
* Grid Page Template
* Alternate Sidebar Page Template
* Jetpack.me compatibility for Infinite Scroll, Testimonial Custom Post Type, Responsive Videos, Site Logo.
* The GPL v2.0 or later license. :) Use it to make something cool.

== Installation ==

1. In your admin panel, go to Appearance > Themes and click the Add New button.
2. Click Upload and Choose File, then select the theme's .zip file. Click Install Now.
3. Click Activate to use your new theme right away.

== Frequently Asked Questions ==

= How to setup the front page like the demo site? =

= I don't see the Testimonial menu in my admin, where can I find it? =

To make the Testimonial menu appear in your admin, you need to install the [Jetpack plugin](http://jetpack.me) because it has the required code needed to make [custom post types](http://codex.wordpress.org/Post_Types#Custom_Post_Types) work for the Edin theme.

Once Jetpack is active, the Testimonial menu will appear in your admin, in addition to standard blog posts. No special Jetpack module is needed and a WordPress.com connection is not required for the Testimonial feature to function. Testimonial will work on a localhost installation of WordPress if you add this line to `wp-config.php`:

`define( 'JETPACK_DEV_DEBUG', TRUE );`

The demo site URL: http://edindemo.wordpress.com/?demo

When you first activate Edin, you’ll see your posts in a traditional blog format. If you’d like to use this template as the front page of your site, follow these instructions:

1. Create or edit a page, and then assign it to the Front Page Template from the Page Attributes module.
2. Add an introduction to your site. For best results, we recommend a few paragraphs.
3. Set your front page image — behind the text — as a Featured Image.
4. Go to Settings → Reading and set “Front page displays” to “A static page.”
5. Select the page to which you just assigned the Front Page Template as “Front page,” and then choose another page as “Posts page” to display your blog posts.

= What are the theme options? =

Edin comes packed with multiple Theme Options available via the Customizer:

* Menu Style: you can choose the style of your menu, default or classic.
* Sidebar Position: you can choose to display the sidebar either on the left or right.
* Thumbnail Aspect Ratio: you can choose the aspect ratio of the thumbnails used for the Grid Page Template or for the Featured Page Areas.
* Header: show search form: display a search form in the theme’s header.
* Front Page: show title: display the Front Page Template’s title.
* Front Page: Featured Page One: select a page to feature on the Front Page Template.
* Front Page: Featured Page Two: select a page to feature on the Front Page Template.
* Front Page: Featured Page Three: select a page to feature on the Front Page Template.

= How to add the social links? =

Edin allows you to display links to your social media profiles — like Twitter and Facebook — as icons using a Custom Menu.

- Set up the menu -

To automatically apply icons to your links, simply create a new Custom Menu and give it a name that starts with “Social” (e.g. “Social Menu,” “Social Links”). This specific name is important and must match exactly. Next, add each of your social links to this menu. Each menu item should be added as a custom link.

Once your menu is created and your social links are added, you can display it in your Secondary or Footer Menu. You can also create a new Custom Menu Widget to display it in any of Edin‘s widget areas.

Edin will automatically apply an icon if it’s available.

- Available icons -

Linking to any of the following sites will automatically display its icon in your menu:

* Codepen
* Digg
* Dribbble
* Dropbox
* Facebook
* Flickr
* GitHub
* Google+
* Instagram
* LinkedIn
* Email (mailto: links)
* Pinterest
* Pocket
* PollDaddy
* Reddit
* RSS Feed (urls with /feed/)
* StumbleUpon
* Tumblr
* Twitter
* Vimeo
* WordPress
* YouTube

= Where are located the widget areas? =

Edin offers seven widget areas, which can be configured in Appearance → Widgets:

* A sidebar widget area, which appears on the right or left.
* Three optional footer widget areas.
* Three optional widget areas on the Front Page Template.

= What are the extra CSS classes? =

Edin comes with two extra CSS styles, button and button-minimal. You can add these two classes to your links by using the Text Editor. We recommend creating a “call to action” button on the Front Page, for example.

== Quick Edin Specs (all measurements in pixels) ==

1. The main column width is 540 except in the full-width layout where it’s 930.
2. A widget in the sidebar is 300.
3. A widget in the Footer Widget Area or Front Page Widget Area is 330.
4. Featured Images for posts are 648 wide by unlimited high.
5. Featured Images for pages are 1230 wide by 1230 high.

== Changelog ==

= 13 August 2015 =
* updating readme to reflect recent changes
* Add isset check to testimonial image, content customizations.

= 31 July 2015 =
* Remove `.screen-reader-text:hover` and `.screen-reader-text:active` style rules.

= 16 July 2015 =
* Always use https when loading Google Fonts. See #3221;

= 5 May 2015 =
* Make sure there is no comment form when it's a testimonial
* Fix missing comment form
* Add support for Testimonial Custom Post Type

= 30 April 2015 =
* Increase/Decrease site-branding max-width depending on how many icons there are
* Add a max-width to .site-branding with jQuery to avoid weird site title wraps.

= 4 March 2015 =
* Fix submenu touch taps for small screens/tablets;

= 3 March 2015 =
* Fix mismatched text domain.

= 10 February 2015 =
* Add more context to strings (Continue reading, Read more) stating that only screen readers will display the post/page title

= 27 January 2015 =
* Slighlty move down the slideshow caption
* Fix slideshow caption position and height.

= 26 January 2015 =
* Fix date in readme
* Display the "show breadcrumb navigation" theme option only when Jetpack's Breadcrumbs are available.
* Add background-color to slideshow caption.
* Make sure we don't have a dropdown-toggle when using the social menu

= 21 January 2015 =
* Improve .dropdown-toggle focus state when it's in a Custom Menu Widget
* Edin: More accessibility

= 20 January 2015 =
* Improve accessibility:

= 19 January 2015 =
* Add post title to the read more link
* Make sure there is only one h1 per page:

= 18 January 2015 =
* Stop using h1 and h2 for site-title and site-description when it's not the homepage with the index view
* Use h2 instead of h1 for widget titles

= 15 January 2015 =
* Add page title to the read more link on the Grid Page template to give the links more context.
* Fix .screen-reader-text position and contrast

= 26 November 2014 =
* Ensure Eventbrite templates in themes are not selectable as custom page templates.

= 25 November 2014 =
* Correct section numbering in stylesheet.
* Add support for upcoming Eventbrite services.

= 6 November 2014 =
* Update site logo link class.

= 2 November 2014 =
* Add Jetpack prefixing to Site Logo template tags.

= 10 September 2014 =
* New conditional check for breadcrumbs -- we don't want them being displayed on the front page template, homepage or if it's not a page.
* Add support for Jetpack Breadcrumbs

= 8 September 2014 =
* Add credits to readme.txt

= 2 September 2014 =
* Clean up padding and borders in the Recent Comments widget.

= 29 August 2014 =
* Add gallery post format support

= 26 August 2014 =
* Use if statement for custom content width function

= 14 August 2014 =
* Add Google fonts to the editor

= 12 August 2014 =
* Fix UI bugs.
* Introduce a new theme option: "Featured Image: remove filter"

= 2 August 2014 =
* Fix Site Title being cut off in Customizer.

= 1 August 2014 =
* Update PO file
* Multiple changes:
* New functions to register Google fonts so that they are available for the visual editor

= 31 July 2014 =
* Add readme
* Update theme author link
* Increase color contrast for search from input border in header
* Style widget authors and widget author grid
* Target site-logo anchor using its classname rather than CSS3 selector
* Adds a class of no-header-navigation to blogs without a primary and a secondary menu
* Reorganise margin within the header to avoid blank space when site-title, menus, search form, site-logo are hidden
* Add theme screenshot
* Remove ratings from excerpt
* Fix extra margin in menu
* Tweak navigation comment so output is similar to post navigation
* Reduce line-height for blockquote, h4 an .hero entry-content. From 48px to 36px

= 30 July 2014 =
* Add support for status post format + Add a -1px margin-top to Hera area with featured image so it hides the .site-header border-bottom
* New background color and no border for Hero area with featured image
* Introduce dark layer for Hero area with featured image
* Fix typo in edin_set_content_width()
* Fix conditional logic for edin_post_thumbnail(). We want to return early if post has post format and not if post doesn't have post format
* Hide ratings from featured-page and grid sections
* New conditional logic for front page featured posts
* Center content area when no-sidebar and remove border bottom of Hero area on Front Page template
* Add missing border-bottom to Hero area
* Update description and tags
* Fix background color menu-toggle when open

= 29 July 2014 =
* Switch from em to px to avoid conflict with font annotations
* Multiple changes:
* Clean stylesheet for better color annotations

= 28 July 2014 =
* Add a JS function to add classes to body depending on window width. --
* Multiple changes:
* Add word wrap to widgets
* Multiple changes:
* Fix word breaking issue on Firefox
* Multiple changes:
* Make sure header image is underneath search and menu when open
* Strip trailing white space
* Add white text color to select located in footer widget area -- current color was unreadable against dark background
* Multiple

= 25 July 2014 =
* Style Recent Posts widget
* Tweak editor style to add RTL support
* Add Editor style
* Add RTL support to wpcom stylesheet
* Add missing RTL rules and fix some existing one
* Add RTL stylesheet and support
* Fix VideoPress wrong height issue -- Massive margin underneath it
* Introduce responsive galleries. 4+ columns are hard to read on a mobile. Instead use 1 column style for 5 and 7, 2 columns style for 4 and 8 and, 3 columns style for 6 and 9.
* Fix inputs paddings
* Clean CSS galleries and add style for Google Maps
* Style PollDaddy
* Remove line-height property from nested blockquotes.
* Fix nested blockquotes font-size/line-height
* Add Reblogger styles + fix sharedaddy
* New sticky style

= 24 July 2014 =
* Fix Default Navigation when viewport >= 1230. Navigation wasn't accessible if menu.height > viewport.height
* Style Top Rated widget
* Style Recent Images widget
* Style Top Clicks widget
* Style Top Posts & Pages widget
* Style Upcoming Events widget
* Style Recent Comments widget
* Tweak related posts margin-bottom to use rem instead of em
* Style List Layout widget + Tweak margins/paddings for elements with font-size: 0.875em
* Style My Community widget
* Style WP Playlists
* Style Milestone widget
* Style Internet Defense League widget
* Style Instagram widget + Tweak Gravatar Profile widget
* Style Goodreads widget
* Style wpcom Stats & Robots
* Add margin-top to site-title when combined with site-logo
* Style Follow Blog widget
* Style Flickr widget
* Style Contact Info widget
* Style Blog Stats and Tag Cloud widget
* Style Blogs I Follow widget
* Style Authors widgets
* Style Akismet widget
* Style About.me widget
* Customise ratings and improve comment form styling

= 23 July 2014 =
* change theme/author URIs and footer links to `wordpress.com/themes`.
* Add styles for wpcom comment form and configure wpcom.php file
* Move Featured image underneath entry-header
* Fix Jetpack Galleries issue on single page
* Add featured image for standard post format
* Track Edin's menu usage in WP.com.
* Tweak Jetpack Sharedaddy + New Sticky style
* Fix menu position when admin-bar is displayed
* Multiple changes:

= 18 July 2014 =
* Remove SASS
* Initial import of the .org version of the Edin theme

== Credits ==

* Edincon: font by Thomas Guillot (http://thomasguillot.com/), licensed under [CC0](http://creativecommons.org/choose/zero/)
* Genericons: font by Automattic (http://automattic.com/), licensed under [GPL2](https://www.gnu.org/licenses/gpl-2.0.html)
* Images: images by Viktor Hanacek (http://picjumbo.com/), licensed under [CC0](http://creativecommons.org/choose/zero/)