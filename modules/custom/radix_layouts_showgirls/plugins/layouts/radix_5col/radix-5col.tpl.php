<?php
/**
 * @file
 * Template for Radix 5col.
 */
?>

<div class="panel-display radix-5col clearfix <?php if (!empty($classes)) { print $classes; } ?><?php if (!empty($class)) { print $class; } ?>" <?php if (!empty($css_id)) { print "id=\"$css_id\""; } ?>>

  <div class="container">
    <div class="row">
      <div class="col-md-2.4 region-column1 panel-panel">
        <div class="panel-panel-inner">
          <?php print $content['column1']; ?>
        </div>
      </div>
      <div class="col-md-2.4 region-column2 panel-panel">
        <div class="panel-panel-inner">
          <?php print $content['column2']; ?>
        </div>
      </div>
      <div class="col-md-2.4 region-column3 panel-panel">
        <div class="panel-panel-inner">
          <?php print $content['column3']; ?>
        </div>
      </div>
      <div class="col-md-2.4 region-column4 panel-panel">
        <div class="panel-panel-inner">
          <?php print $content['column4']; ?>
        </div>
      </div>
      <div class="col-md-2.4 region-column5 panel-panel">
        <div class="panel-panel-inner">
          <?php print $content['column5']; ?>
        </div>
      </div>
    </div>
  </div>
    
</div><!-- /.radix-5col -->