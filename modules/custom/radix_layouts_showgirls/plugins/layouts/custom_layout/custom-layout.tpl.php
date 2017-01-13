<?php
/**
 * @file
 * Template for Custom Layout.
 */
?>

<div class="panel-display custom-layout clearfix <?php if (!empty($classes)) { print $classes; } ?><?php if (!empty($class)) { print $class; } ?>" <?php if (!empty($css_id)) { print "id=\"$css_id\""; } ?>>

  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3 radix-layouts-sidebar panel-panel">
        <div class="panel-panel-inner">
          <?php print $content['sidebar']; ?>
        </div>
      </div>
      <div class="col-md-9 radix-layouts-content panel-panel">
        <div class="panel-panel-inner">
          <?php print $content['contentmain']; ?>
        </div>
      </div>
    </div>
  </div>
    
</div><!-- /.custom-layout -->