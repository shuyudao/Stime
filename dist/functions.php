<?php
if (!defined('__TYPECHO_ROOT_DIR__')) exit;
function themeConfig($form) {
    $logoUrl = new Typecho_Widget_Helper_Form_Element_Text('logoUrl', NULL, "http://q.qlogo.cn/headimg_dl?dst_uin=2423458891&spec=640&img_type=jpg", _t('头像地址'), _t('在这里填入一个图片的URL地址, 以在网站显示你的头像'));
    $form->addInput($logoUrl);

    $name = new Typecho_Widget_Helper_Form_Element_Text('name', NULL, "STime", _t('头部站点名'), _t('输入位于头像下的站点名，非SEO标题'));
    $form->addInput($name);

    $notice = new Typecho_Widget_Helper_Form_Element_Text('notice', NULL, "朗月清风，浓烟暗雨，天教憔悴度芳姿.", _t('头部通知文字'), _t('输入位于站点名下的文字内容'));
    $form->addInput($notice);

    $footer = new Typecho_Widget_Helper_Form_Element_Text('footer', NULL, "© 2018 - 2019  ❤ STime & Typecho", _t('底部版权文字'), _t('输入位于站底部的版权文字，建议尊重保留主题作者版权'));
    $form->addInput($footer);
}