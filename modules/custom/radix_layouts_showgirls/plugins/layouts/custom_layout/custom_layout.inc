<?php
// Plugin definition
$plugin = array(
  'title' => t('Custom Layout'),
  'icon' => 'custom-layout.png',
  'category' => t('Custom'),
  'theme' => 'custom_layout',
  'regions' => array(
    'sidebar' => t('Sidebar'),
    'contentmain' => t('Content'),
  ),
);
