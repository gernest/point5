require 'bundler'
Bundler.require

set :root, File.dirname(__FILE__)

configure do
	SiteConfig=OpenStruct.new(
		:title=>'point5 grade',
		:author=>'geofrey ernest',
		)
end

get '/' do
  erb :index
end

get '/about' do
    erb :about
end

get '/usage' do
    erb :usage
end