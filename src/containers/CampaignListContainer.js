import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampaigns } from '../features/campaign/campaignActions/fetchCampaigns';
import { deleteCampaign } from '../features/campaign/campaignActions/deleteCampaign';
import { duplicateCampaign } from '../features/campaign/campaignActions/duplicateCampaign';
import CampaignList from '../components/CampaignList';

const CampaignListContainer = () => {
	const dispatch = useDispatch();
	const campaigns = useSelector((state) => state.campaign.campaigns);
	const status = useSelector((state) => state.campaign.status);
	const error = useSelector((state) => state.campaign.error);

	useEffect(() => {
		dispatch(fetchCampaigns());
	}, [dispatch]);

	const handleDelete = (id) => {
		dispatch(deleteCampaign(id));
	};

	const handleDuplicate = (id) => {
		dispatch(duplicateCampaign(id));
	};

	return (
		<CampaignList
			campaigns={campaigns}
			status={status}
			error={error}
			onDelete={handleDelete}
			onDuplicate={handleDuplicate}
		/>
	);
};

export default CampaignListContainer;
