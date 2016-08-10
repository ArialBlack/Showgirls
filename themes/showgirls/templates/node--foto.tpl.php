<?php

/**
 * @file
 * Default theme implementation to display a node.
 *
 * Available variables:
 * - $title: the (sanitized) title of the node.
 * - $content: An array of node items. Use render($content) to print them all,
 *   or print a subset such as render($content['field_example']). Use
 *   hide($content['field_example']) to temporarily suppress the printing of a
 *   given element.
 * - $user_picture: The node author's picture from user-picture.tpl.php.
 * - $date: Formatted creation date. Preprocess functions can reformat it by
 *   calling format_date() with the desired parameters on the $created variable.
 * - $name: Themed username of node author output from theme_username().
 * - $node_url: Direct URL of the current node.
 * - $display_submitted: Whether submission information should be displayed.
 * - $submitted: Submission information created from $name and $date during
 *   template_preprocess_node().
 * - $classes: String of classes that can be used to style contextually through
 *   CSS. It can be manipulated through the variable $classes_array from
 *   preprocess functions. The default values can be one or more of the
 *   following:
 *   - node: The current template type; for example, "theming hook".
 *   - node-[type]: The current node type. For example, if the node is a
 *     "Blog entry" it would result in "node-blog". Note that the machine
 *     name will often be in a short form of the human readable label.
 *   - node-teaser: Nodes in teaser form.
 *   - node-preview: Nodes in preview mode.
 *   The following are controlled through the node publishing options.
 *   - node-promoted: Nodes promoted to the front page.
 *   - node-sticky: Nodes ordered above other non-sticky nodes in teaser
 *     listings.
 *   - node-unpublished: Unpublished nodes visible only to administrators.
 * - $title_prefix (array): An array containing additional output populated by
 *   modules, intended to be displayed in front of the main title tag that
 *   appears in the template.
 * - $title_suffix (array): An array containing additional output populated by
 *   modules, intended to be displayed after the main title tag that appears in
 *   the template.
 *
 * Other variables:
 * - $node: Full node object. Contains data that may not be safe.
 * - $type: Node type; for example, story, page, blog, etc.
 * - $comment_count: Number of comments attached to the node.
 * - $uid: User ID of the node author.
 * - $created: Time the node was published formatted in Unix timestamp.
 * - $classes_array: Array of html class attribute values. It is flattened
 *   into a string within the variable $classes.
 * - $zebra: Outputs either "even" or "odd". Useful for zebra striping in
 *   teaser listings.
 * - $id: Position of the node. Increments each time it's output.
 *
 * Node status variables:
 * - $view_mode: View mode; for example, "full", "teaser".
 * - $teaser: Flag for the teaser state (shortcut for $view_mode == 'teaser').
 * - $page: Flag for the full page state.
 * - $promote: Flag for front page promotion state.
 * - $sticky: Flags for sticky post setting.
 * - $status: Flag for published status.
 * - $comment: State of comment settings for the node.
 * - $readmore: Flags true if the teaser content of the node cannot hold the
 *   main body content.
 * - $is_front: Flags true when presented in the front page.
 * - $logged_in: Flags true when the current user is a logged-in member.
 * - $is_admin: Flags true when the current user is an administrator.
 *
 * Field variables: for each field instance attached to the node a corresponding
 * variable is defined; for example, $node->body becomes $body. When needing to
 * access a field's raw values, developers/themers are strongly encouraged to
 * use these variables. Otherwise they will have to explicitly specify the
 * desired field language; for example, $node->body['en'], thus overriding any
 * language negotiation rule that was previously applied.
 *
 * @see template_preprocess()
 * @see template_preprocess_node()
 * @see template_process()
 *
 * @ingroup themeable
 */
 $byShowgirls = false;
 if ($node->field_by_showgirls['und'][0]['value'] == 1) {
     $byShowgirls = true;
 }
 
 $coverfile = file_load($node->field_front_image['und'][0]['fid']);
 $coveruri = $coverfile->uri;
?>

<div id="node-<?php print $node->nid; ?>" class="<?php print $classes; ?> clearfix"<?php print $attributes; ?>>

  

  <?php print render($title_prefix); ?>
  <?php if (!$page): ?>
    <h2<?php print $title_attributes; ?>><a href="<?php print $node_url; ?>"><?php print $title; ?></a></h2>
  <?php endif; ?>
  <?php print render($title_suffix); ?>


  
    <div class="intro fullscreen-cover">
        <div class="col-sm-9 np imagecover" style="background-image: url('<?php print image_style_url("cover", $coveruri) ?>')"></div>
        <div class="col-sm-3">
            <h2<?php print $title_attributes; ?>><?php print $title; ?></h2>
            
            <div class="models">
                <?php print render($content['field_user_model']); ?>
            </div>
            
            <div class="text-teaser">
                <?php print $node->body['und'][0]['safe_summary']; ?>
            </div>
            
            <div class="photographer">
                <span class="author-label"><?php print t('Photo:'); ?></span>
                <?php print render($content['field_user_photographer']); ?>
            </div>
            
            <div class="mua">
                <span class="author-label"><?php print t('Mua:'); ?></span>
                <?php print render($content['field_user_mua']); ?>
            </div>
            
            <?php if ($byShowgirls): ?>
                <div class="byShowgirls">
                    <span class="author-label"><?php print t('Idea:'); ?></span>
                    <span class="logo"><img src="/sites/all/themes/showgirls/logo.png" alt="Showgirls" /></span>
                </div>
            <?php endif; ?>
        </div>
    </div>

    <div class="clearfix"></div>
    <div class="content"<?php print $content_attributes; ?>>
        
        <div class="narrow-container1">
            <?php print render($content['body']); ?>
        </div>
        
        <div class="wider-container1">
            <?php 
            //print render($content['field_media']);
            //dsm($node->field_media['und']);
            $medialist = $node->field_media['und'];
            
            for ($i = 0; $i < count($medialist); $i++) {
               //dsm ($medialist[$i]['fid']);
                $mediafile = file_load($medialist[$i]['fid']);
                $mediauri = $mediafile->uri;
                
                $mediainfo = image_get_info($mediauri);
                $mediawidth = $mediainfo["width"];
                $mediaheight = $mediainfo["height"];
                
                if($mediawidth >= $mediaheight) {
                    $mediaRatio = "landscape";
                } else $mediaRatio = "portrait";
                
                print "<div class=" ."\"". "fh field_media " . $mediaRatio . "\"" . "><div class=" ."\"". "field_media-wrap " . "\"" . "style=" . "\"" . "background-image: url('" . image_style_url("large", $mediauri) ."')" . "\"" . "></div></div>\n";
            }
            
            ?>
        </div>
    
        <?php
          // We hide the comments and links now so that we can render them later.
          hide($content);
          hide($content['comments']);
          hide($content['links']);
          //print render($content);
        ?>
    </div>

  <?php print render($content['links']); ?>

  <?php print render($content['comments']); ?>
  
  <?php print $user_picture; ?>
  
  <?php if ($display_submitted): ?>
    <div class="submitted">
      <?php print $submitted; ?>
    </div>
  <?php endif; ?>

</div>
