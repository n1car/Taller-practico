import { OrderEntity } from './entities/order.entity';
import { OrderPriorityService } from './order-priority.service';
import { describe, it, expect } from '@jest/globals';
describe('OrderPriorityService', () => {
  const service = new OrderPriorityService();
  it('returns normal for pending order with quantity 1', () => {
    const order = { quantity: 1, status: 'pending' } as OrderEntity;
    expect(service.classify(order).priority).toBe('normal');
  });
  it('returns medium for pending order with quantity 3', () => {
    const order = { quantity: 3, status: 'pending' } as OrderEntity;
    expect(service.classify(order).priority).toBe('medium');
  });
  it('returns high for pending order with quantity 4', () => {
    const order = { quantity: 4, status: 'pending' } as OrderEntity;
    expect(service.classify(order).priority).toBe('high');
  });
  it('returns completed for ready order with quantity 5', () => {
    const order = { quantity: 5, status: 'ready' } as OrderEntity;
    expect(service.classify(order).priority).toBe('completed');
  });
});