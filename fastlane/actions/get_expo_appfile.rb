require 'json'

module Fastlane
  module Actions
    module SharedValues
      EXPO_APP_INFO = :EXPO_APP_INFO
    end

    class GetExpoAppfileAction < Action
      def self.run(params)
        # fastlane will take care of reading in the parameter and fetching the environment variable:
        UI.message "Path to app.json: #{params[:file_path]}/app.json"
        appfile = File.read("#{params[:file_path]}/app.json")
        appfileHash = JSON.parse appfile

        # sh "shellcommand ./path"

        Actions.lane_context[SharedValues::EXPO_APP_INFO] = appfileHash
      end

      #####################################################
      # @!group Documentation
      #####################################################

      def self.description
        "A short description with <= 80 characters of what this action does"
      end

      def self.details
        # Optional:
        # this is your chance to provide a more detailed description of this action
        "You can use this action to do cool things..."
      end

      def self.available_options
        # Define all options your action supports.

        # Below a few examples
        [
          FastlaneCore::ConfigItem.new(key: :file_path,
                                       env_name: "EXPO_APPFILE_PATH", # The name of the environment variable
                                       description: "Path to app.json", # a short description of this parameter
                                       default_value: "."),
        ]
      end

      def self.output
        # Define the shared values you are going to provide
        # Example
        [
          ['EXPO_APP_INFO', 'A description of what this value contains']
        ]
      end

      def self.return_value
        # If your method provides a return value, you can describe here what it does
      end

      def self.authors
        # So no one will ever forget your contribution to fastlane :) You are awesome btw!
        ["Your GitHub/Twitter Name"]
      end

      def self.is_supported?(platform)
        # you can do things like
        #
        #  true
        #
        #  platform == :ios
        #
        #  [:ios, :mac].include?(platform)
        #

        platform == :ios
      end
    end
  end
end
