class User < ApplicationRecord
  validates :username, presence: true, length: {minimum:3, maximum:15}, uniqueness: {case_insensitive: false}
  has_many :message
  has_secure_password
end
