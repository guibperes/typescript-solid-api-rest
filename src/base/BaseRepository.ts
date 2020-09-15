export interface BaseRepository<ENTITY, ID> {

  save(entity: ENTITY): Promise<void>;
  updateById(id: ID, entity: ENTITY): Promise<ENTITY>;
  deleteById(id: ID): Promise<void>;
  findAll(): Promise<ENTITY[]>;
  findById(id: ID): Promise<ENTITY>;
}
