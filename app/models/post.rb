class Post < ApplicationRecord
  include PgSearch

  validates :author, :title, :content, :content_text, presence: true

  pg_search_scope :search, against: [:title, :content_text, :summary]

  def content=(ops)
    self[:content] = ops
    return unless ops
    content_text = ''
    ops.values.each do |op|
      if op['insert'].is_a?(String)
        content_text = content_text.concat(op['insert'])
      end
    end
    self.content_text = content_text
  end

  def shown_summary
    if !self.summary || self.summary.empty? then self[:content_text][0...self[:content_text].index("\n") || -1] else self.summary end
  end

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  has_many :taggings,
    dependent: :destroy

  has_many :tags,
    through: :taggings,
    source: :tag

  has_many :comments,
    inverse_of: :post,
    dependent: :destroy

  def tag_names=(tag_names)
    self.tags = tag_names.map do |tag_name|
      Tag.find_or_create_by(name: tag_name)
    end
  end
end
