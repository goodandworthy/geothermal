# Uncomment this if you reference any of your controllers in activate
# require_dependency 'application'

class WmdExtension < Radiant::Extension
  version "1.0"
  description "Describe your extension here"
  url "http://yourwebsite.com/wmd"
  
  # define_routes do |map|
  #   map.namespace :admin, :member => { :remove => :get } do |admin|
  #     admin.resources :wmd
  #   end
  # end
  
  def activate
    Page.send :include, WmdTags
    # admin.page.edit.add :node, 'wmd_extra', :after => "edit_header"
    admin.page.edit.add :part_controls, "wmd_extra"
    admin.page.edit.add :part_controls, "wmd_preview"
    # admin.page.edit.add :form, "/admin/page/wmd_extra"
    # admin.page.edit.add :form, "/admin/page/wmd_extra"
    # admin.tabs.add "Wmd", "/admin/wmd", :after => "Layouts", :visibility => [:all]
  end
  
  def deactivate
    # admin.tabs.remove "Wmd"
  end
  
end
