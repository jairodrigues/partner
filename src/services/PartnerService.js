import ServiceHelper from './ServiceHelper';

const url = 'http://localhost:3003/partners';

class PartnerService {
  static async registerPartner(data) {
    return await ServiceHelper.SendPost(url, data);
  }
}

export default PartnerService;
