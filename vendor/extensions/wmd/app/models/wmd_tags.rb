module WmdTags
  include Radiant::Taggable

  tag 'wmd' do |tag|
    tag.expand
  end
  
  tag 'wmd:editor' do |tag|
    html = ''
    # html += stylesheet_link_tag 'wmd'
    html += javascript_include_tag 'wmd/wmd'
    html
  end
  
end
