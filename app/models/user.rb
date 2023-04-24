class User < ApplicationRecord
    has_secure_password

    validates :username, 
        length: { in: 3..16 }, 
        uniqueness: true,
        format: { without: URI::MailTo::EMAIL_REGEXP, message:  "can't be an email" }

    validates :email, 
        length: { in: 10..24}, 
        uniqueness: true,
        format: { with: URI::MailTo::EMAIL_REGEXP }

    validates :session_token, presence: true, uniqueness: true
    validates :password, length: { in: 10..24 }, allow_nil: true


    before_validation :ensure_session_token

    def self.find_by_credentials(credential, password)
        field = credential =~ URI::MailTo::EMAIL_REGEXP ? :email : :username
        user = User.find_by(field => credential)
        user&.authenticate(password)
    end

    def reset_session_token
        self.update!(session_token: generate_session_token)
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= generate_session_token
    end

    private

    def generate_session_token
        loop do
            token = SecureRandom::urlsafe_base64(16)
            return token unless User.exists?(session_token: token)
        end
    end
end
