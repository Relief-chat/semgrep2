<?php

$arr = [3, 4, 5];
$newArr = array_filter($arr, fn($item) => $item > 3);

//ERROR: match
$this->logger->info('Removing network bond');
