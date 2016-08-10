<?php

/**
 * @file
 * template.php
 */


function azp_preprocess_page(&$vars) {
	 if (isset($vars['node'])) {
	$vars['theme_hook_suggestion'] = 'page__'.$vars['node']->type;
	}
}

function azp_preprocess_html(&$vars) {
  $path = drupal_get_path_alias();
  $aliases = explode('/', $path);

  foreach($aliases as $alias) {
    $vars['classes_array'][] = drupal_clean_css_identifier($alias);
  } 
}

function azp_preprocess_node(&$vars) {
  $node_type_suggestion_key = array_search('node__' . $vars['type'], $vars['theme_hook_suggestions']);
  if ($node_type_suggestion_key !== FALSE) {
    $node_view_mode_suggestion = 'node__' . $vars['type'] . '__' . $vars['view_mode'];
    array_splice($vars['theme_hook_suggestions'], $node_type_suggestion_key + 1, 0, array($node_view_mode_suggestion));
  }
}

