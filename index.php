<?php include 'src/header.php'; ?>

<div class="page">
    <?php include_template(COMPONENT_PATH . 'navbar/navbar', [
        'args' => 'mon argument',
    ]); ?>
    Hello world
</div>

<?php include 'src/footer.php'; ?>
