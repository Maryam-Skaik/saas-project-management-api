class BaseRepository {
  constructor(model) {
    this.model = model;
  }

  // Create a new document
  async create(data) {
    return await this.model.create(data);
  }

  // Find by ID
  async findById(id, populate = "") {
    return await this.model.findById(id).populate(populate);
  }

  // Find one by filter
  async findOne(filter, populate = "") {
    return await this.model.findOne(filter).populate(populate);
  }

  // Find all with optional filter
  async find(filter = {}, populate = "") {
    return await this.model.find(filter).populate(populate);
  }

  // Update by ID
  async updateById(id, updateData, options = { new: true }) {
    return await this.model.findByIdAndUpdate(id, updateData, options);
  }

  // Delete by ID
  async deleteById(id) {
    return await this.model.findByIdAndDelete(id);
  }

  // Count documents
  async count(filter = {}) {
    return await this.model.countDocuments(filter);
  }

  // Pagination helper
  async findWithPagination(filter = {}, page = 1, limit = 10, populate = "") {
    const skip = (page - 1) * limit;

    const data = await this.model
      .find(filter)
      .skip(skip)
      .limit(limit)
      .populate(populate);

    const total = await this.model.countDocuments(filter);

    return {
      data,
      total,
      page,
      pages: Math.ceil(total / limit)
    };
  }
}

module.exports = BaseRepository;