<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitecd34da84ec1fc27cbbf14a2bd21154a
{
    public static $prefixLengthsPsr4 = array (
        'F' => 
        array (
            'Firebase\\JWT\\' => 13,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Firebase\\JWT\\' => 
        array (
            0 => __DIR__ . '/..' . '/firebase/php-jwt/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitecd34da84ec1fc27cbbf14a2bd21154a::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitecd34da84ec1fc27cbbf14a2bd21154a::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitecd34da84ec1fc27cbbf14a2bd21154a::$classMap;

        }, null, ClassLoader::class);
    }
}
