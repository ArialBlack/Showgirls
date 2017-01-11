<?php

/**
 * @file field.tpl.php
 * Default template implementation to display the value of a field.
 *
 * This file is not used and is here as a starting point for customization only.
 * @see theme_field()
 *
 * Available variables:
 * - $items: An array of field values. Use render() to output them.
 * - $label: The item label.
 * - $label_hidden: Whether the label display is set to 'hidden'.
 * - $classes: String of classes that can be used to style contextually through
 *   CSS. It can be manipulated through the variable $classes_array from
 *   preprocess functions. The default values can be one or more of the
 *   following:
 *   - field: The current template type, i.e., "theming hook".
 *   - field-name-[field_name]: The current field name. For example, if the
 *     field name is "field_description" it would result in
 *     "field-name-field-description".
 *   - field-type-[field_type]: The current field type. For example, if the
 *     field type is "text" it would result in "field-type-text".
 *   - field-label-[label_display]: The current label position. For example, if
 *     the label position is "above" it would result in "field-label-above".
 *
 * Other variables:
 * - $element['#object']: The entity to which the field is attached.
 * - $element['#view_mode']: View mode, e.g. 'full', 'teaser'...
 * - $element['#field_name']: The field name.
 * - $element['#field_type']: The field type.
 * - $element['#field_language']: The field language.
 * - $element['#field_translatable']: Whether the field is translatable or not.
 * - $element['#label_display']: Position of label display, inline, above, or
 *   hidden.
 * - $field_name_css: The css-compatible field name.
 * - $field_type_css: The css-compatible field type.
 * - $classes_array: Array of html class attribute values. It is flattened
 *   into a string within the variable $classes.
 *
 * @see template_preprocess_field()
 * @see theme_field()
 *
 * @ingroup themeable
 */
?>
<!--
THIS FILE IS NOT USED AND IS HERE AS A STARTING POINT FOR CUSTOMIZATION ONLY.
See http://api.drupal.org/api/function/theme_field/7 for details.
After copying this file to your theme's folder and customizing it, remove this
HTML comment.
-->
<div class="<?php print $classes; ?>"<?php print $attributes; ?>>
  <?php if (!$label_hidden): ?>
    <div class="field-label"<?php print $title_attributes; ?>><?php print $label ?>:&nbsp;</div>
  <?php endif; ?>
  <div class="field-items"<?php print $content_attributes; ?>>
    <?php foreach ($items as $delta => $item): ?>
      <?php
        $mediafile = file_load($item['file']['#item']['fid']);
        $mediauri = $mediafile->uri;
        list($mediawidth, $mediaheight) = getimagesize(image_style_url("large", $mediauri));
        $ratio = $mediawidth / $mediaheight;

        //$ext = pathinfo($filename, PATHINFO_EXTENSION);
        $ext = $mediafile->filemime;

        if ($ratio > 1.14) {
          $mediaRatio = "landscape";
        } else if ($ratio <= 1.14 && $ratio >= 0.875) {
          $mediaRatio = "square";
        } else if ($ratio < 0.875) {
          $mediaRatio = "portrait";
        }

        //print "<div class=" ."\"". "fh field_media " . $mediaRatio . "\"" . "><div class=" ."\"". "field_media-wrap " . "\"" . "style=" . "\"" . "background-image: url('" . image_style_url("large", $mediauri) ."')" . "\"" . "></div></div>\n";
      ?>

      <div class="field-item <?php print $delta % 2 ? 'odd' : 'even'; print $ext == 'image/gif' ? ' animation-image' : 'static-image';  ?>"<?php print $item_attributes[$delta]; ?>>
        <?php
          //print render($item);
          if ($ext == 'image/gif') {
            $gif = '<figure class="static-gif"><img src="' . image_style_url("large_png", $mediauri) .'" data-alt="' . file_create_url($mediauri) .'"></figure>';
            print $gif;
          }
        ?>
      </div>

    <?php endforeach; ?>
  </div>
</div>