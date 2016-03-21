<?php
/**
 * Zend Framework (http://framework.zend.com/)
 *
 * @link      http://github.com/zendframework/ZendSkeletonApplication for the canonical source repository
 * @copyright Copyright (c) 2005-2015 Zend Technologies USA Inc. (http://www.zend.com)
 * @license   http://framework.zend.com/license/new-bsd New BSD License
 */

namespace Backend;

return array(
    'router' => array(
        'routes' => array(
            'backend' => array(
                'type' => 'Zend\Mvc\Router\Http\Literal',
                'options' => array(
                    'route'    => '/quan-ly',
                    'defaults' => array(
                        'controller' => 'Backend\Controller\Dashboard',
                        'action'     => 'index',
                    ),
                ),
            ),
            'backend_kiosk' => array(
                'type'    => 'Segment',
                'options' => array(
                    'route'    => '/quan-ly/gian-hang',
                    'defaults' => array(
                        '__NAMESPACE__' => 'Backend\Controller',
                        'controller'    => 'Kiosk',
                        'action'        => 'index',
                    ),
                ),
            ),
            'backend_login' => array(
                'type'    => 'Literal',
                'options' => array(
                    'route'    => '/quan-ly/dang-nhap',
                    'defaults' => array(
                        '__NAMESPACE__' => 'Backend\Controller',
                        'controller'    => 'Login',
                        'action'        => 'index',
                    ),
                ),
                'may_terminate' => true,
                'child_routes' => array(
                    'backend_confirm_login' => array(
                        'type' => 'Literal',
                        'options' => array(
                            'route' => '/xac-nhan-dang-nhap',
                            'defaults' => array(
                                '__NAMESPACE__' => 'Backend\Controller',
                                'controller'    => 'Login',
                                'action'        => 'authentication',
                            ),
                        ),
                    ),
                ),
            ),
            'backend_logout' => array(
                'type'    => 'Literal',
                'options' => array(
                    'route'    => '/quan-ly/dang-xuat',
                    'defaults' => array(
                        '__NAMESPACE__' => 'Backend\Controller',
                        'controller'    => 'Login',
                        'action'        => 'logout',
                    ),
                ),
            ),
            'backend_group' => array(
                'type'    => 'Segment',
                'options' => array(
                    'route'    => '/quan-ly/nhom',
                    'defaults' => array(
                        '__NAMESPACE__' => 'Backend\Controller',
                        'controller'    => 'Group',
                        'action'        => 'index',
                    ),
                ),
            ),
            'backend_menu' => array(
                'type'    => 'Segment',
                'options' => array(
                    'route'    => '/quan-ly/danh-muc',
                    'defaults' => array(
                        '__NAMESPACE__' => 'Backend\Controller',
                        'controller'    => 'Menu',
                        'action'        => 'index',
                    ),
                ),
            ),
            'backend_user' => array(
                'type'    => 'Segment',
                'options' => array(
                    'route'    => '/quan-ly/nguoi-dung',
                    'defaults' => array(
                        '__NAMESPACE__' => 'Backend\Controller',
                        'controller'    => 'User',
                        'action'        => 'index',
                    ),
                ),
            ),
        ),
    ),
    'service_manager' => array(
        'abstract_factories' => array(
            'Zend\Cache\Service\StorageCacheAbstractServiceFactory',
            'Zend\Log\LoggerAbstractServiceFactory',
        ),
        'factories' => array(
            'translator' => 'Zend\Mvc\Service\TranslatorServiceFactory',
        ),
    ),
    'translator' => array(
        'locale' => 'en_US',
        'translation_file_patterns' => array(
            array(
                'type'     => 'gettext',
                'base_dir' => __DIR__ . '/../language',
                'pattern'  => '%s.mo',
            ),
        ),
    ),
    'controllers' => array(
        'invokables' => array(
            'Backend\Controller\Index' => Controller\IndexController::class,
            'Backend\Controller\Dashboard' => Controller\DashboardController::class,
            'Backend\Controller\Login' => Controller\LoginController::class,
            'Backend\Controller\Menu' => Controller\MenuController::class,
            'Backend\Controller\Kiosk' => Controller\KioskController::class,
            'Backend\Controller\Group' => Controller\GroupController::class,
            'Backend\Controller\User' => Controller\UserController::class,
        ),
    ),
    'view_manager' => array(
        'display_not_found_reason' => true,
        'display_exceptions'       => true,
        'doctype'                  => 'HTML5',
        'not_found_template'       => 'error/404',
        'exception_template'       => 'error/index',
        'template_map' => array(
            'backend/layout'           => __DIR__ . '/../view/layout/layout.phtml',
            'backend/layoutlogin'           => __DIR__ . '/../view/layout/layoutlogin.phtml',
            'backend/index/index' => __DIR__ . '/../view/backend/index/index.phtml',
            'backend/error/404'               => __DIR__ . '/../view/error/404.phtml',
            'backend/error/index'             => __DIR__ . '/../view/error/index.phtml',
        ),
        'template_path_stack' => array(
            __DIR__ . '/../view',
        ),
    ),
);
