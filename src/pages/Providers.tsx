import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
interface Provider {
    _id: string,
    name: string,
  }
  export interface Service {
    service: {
      _id: string;
      name: string;
      description: string;
      providers: string[];
    },
    providers: [{
      _id: string
      name: string
    }]
  }
const Providers = () => {
  const providers = [
    { name: 'Provider 1', ratings: '⭐⭐⭐⭐⭐' },
    { name: 'Provider 2', ratings: '⭐⭐⭐⭐' },
    { name: 'Provider 3', ratings: '⭐⭐⭐⭐⭐' },
    { name: 'Provider 4', ratings: '⭐⭐⭐' },
    { name: 'Provider 5', ratings: '⭐⭐⭐⭐' },
    { name: 'Provider 6', ratings: '⭐⭐⭐⭐⭐' },
    { name: 'Provider 5', ratings: '⭐⭐⭐⭐' },
    { name: 'Provider 6', ratings: '⭐⭐⭐⭐⭐' },
  ];
  const {state} = useLocation();
  const navigate = useNavigate();
  const {service} = state;
  const handleSeeProviders =(id: string) => {
    navigate(`/customer/providerprofile/${id}`);
  }

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          {  service.providers.map((provider: Provider) => (
            <div className="col-md-4 mb-4" key={provider._id}>
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title">{provider.name}</h5>
                  <p className="card-text">{provider._id}</p>
                  <a href="#" className="btn btn-primary btn-service-master-bg text-dark"  onClick={() => handleSeeProviders(provider._id)}>Visit Profile</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Providers;
