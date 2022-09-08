import * as service from '../service';


jest.mock('../loader',() => {
const mockFunction = () => ({
  type:'mock',
  data:[4,5,7]
});

    return {
    __esModule: true,
    loadData:mockFunction
    }
});

describe("service", () => {

    it('[dataHandler] should return mapped mock data', () => {
        const res = service.dataHandler();
        expect(res).toBeInstanceOf(Promise);
        expect(res).resolves.toBeInstanceOf(Array);
    })

    it('[anotherDataHandler] should return type property', () => {
        const res = service.anotherDataHandler();
        expect(res).toBeInstanceOf(Promise);
        expect(res).resolves.toBe('mock');
    })
});