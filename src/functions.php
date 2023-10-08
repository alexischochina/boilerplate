<?php
/**
* @param $obj
*/
function trace($obj) {
echo '<pre>';
    print_r($obj);
    echo '</pre>';
}

/**
 * @param string $path
 * @param null|array $args
 */
function include_template(string $path, array $args = null) {
    if(strpos($path, '.php') === false) $path.='.php';
    if(file_exists($path)) {
        if(is_array($args)) extract($args);
        include $path;
    } else {
        echo 'Template '.$path.' doesn\'t exist<br />';
    }
}