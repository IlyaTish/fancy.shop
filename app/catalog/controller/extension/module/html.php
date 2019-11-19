<?php
class ControllerExtensionModuleHTML extends Controller {
	public function index($setting) {
		if (isset($setting['module_description'][$this->config->get('config_language_id')])) {
			$data['heading_title'] = html_entity_decode($setting['module_description'][$this->config->get('config_language_id')]['title'], ENT_QUOTES, 'UTF-8');
			$data['html'] = html_entity_decode($setting['module_description'][$this->config->get('config_language_id')]['description'], ENT_QUOTES, 'UTF-8');

			if (isset($setting['module_html_categories']) && is_array($setting['module_html_categories'])) {

				$path = '';

				$parts = explode('_', (string)$this->request->get['path']);

				$category_id =  (int)array_pop($parts);

				$data['data'] = $setting;
				$data['cat'] = $category_id;
				if (in_array($category_id, $setting['module_html_categories'])) { //если в массиве есть id текущей категории выводим
					return $this->load->view('extension/module/html', $data);
				}
			}
			else {
				return $this->load->view('extension/module/html', $data);
			}
		}
	}
}