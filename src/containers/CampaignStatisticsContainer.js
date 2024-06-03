import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampaignStatistics } from '../features/campaign/campaignActions/fetchCampaignStatistics';
import CampaignStatistics from '../components/CampaignStatistics';

const CampaignStatisticsContainer = ({ campaignId }) => {
	const dispatch = useDispatch();
	const statistics = useSelector((state) => state.campaign.statistics);
	const status = useSelector((state) => state.campaign.status);
	const error = useSelector((state) => state.campaign.error);

	useEffect(() => {
		dispatch(fetchCampaignStatistics(campaignId));
	}, [dispatch, campaignId]);

	return (
		<CampaignStatistics
			statistics={statistics}
			status={status}
			error={error}
		/>
	);
};

export default CampaignStatisticsContainer;
