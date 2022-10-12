class JobSerializer < ActiveModel::Serializer
  attributes :id, :company_name, :description, :company_logo, :salary, :website, :user_id
end
