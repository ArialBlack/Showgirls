<?php
/**
 * @file
 * Template file for the theming the modal box.
 *
 * Available custom variables:
 * - $site_name
 * - $render_string
 *
 */
?>
<div class="modal-dialog container">
    <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><i class="fa fa-times"></i>close</button>
        <h4 class="modal_title">header</h4>
    </div>
    <div class="modal-content">
        <div class="modal-body">
            <?php  print $render_string; ?>
        </div>
    </div>
</div>