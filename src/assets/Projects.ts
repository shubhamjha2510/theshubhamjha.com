import { IconType } from 'react-icons';
import {FaCodeBranch, FaCommentAlt, FaHeart, FaStar,} from 'react-icons/fa';

import { FaBuilding } from 'react-icons/fa';
import { GiFlatHammer } from 'react-icons/gi';
import { GiSuspensionBridge} from 'react-icons/gi';
import { FaLayerGroup} from 'react-icons/fa';
import { GiUndergroundCave } from 'react-icons/gi';
import { GiEarthCrack } from 'react-icons/gi';

export const platforms = ['steel', 'bridge', 'rcc', 'composite', 'seismic', 'tunnel'] as const;
export type Platform = (typeof platforms)[number]

export const platformDetails: Record<Platform, {
  label: string,
  sublabel: string,
  icon: IconType }> = {
    rcc: {
      label: 'RCC',
      icon: FaBuilding,
      sublabel: '(Reinforced Concrete)',
    },
    steel: {
      label: 'Steel',
      icon: GiFlatHammer,
      sublabel: '(Steel Structures)',
    },
    bridge: {
      label: 'Bridges',
      icon: GiSuspensionBridge,
      sublabel: '(Bridge Design)',
    },
    
    composite: {
      label: 'Composite',
      sublabel: '(Composite Structures)',
      icon: FaLayerGroup,
    },
    tunnel: {
      label: 'Tunnel and Underground',
      sublabel: '(Underground Structures)',
      icon: GiUndergroundCave,
    },
    seismic: {
      label: 'Seismic',
      sublabel: '(Seismic Design)',
      icon: GiEarthCrack,
    },
  };

export const interactions = ['stars', 'forks', 'comments', 'likes'] as const;
export type Interaction = (typeof interactions)[number];

export const interactionDetails: Record<Interaction, { label: string, icon: IconType }> = {
  stars: { label: 'Stars', icon: FaStar },
  forks: { label: 'Forks', icon: FaCodeBranch },
  comments: { label: 'Comments', icon: FaCommentAlt },
  likes: { label: 'Likes', icon: FaHeart },
};

export interface Project {
  title: string;
  description?: string;
  thumbnail?: string;
  source: string;
  demo?: string;
  language?: string;
  createdAt?: string;
  updatedAt?: string;
  interactions?: Partial<Record<Interaction, number>>;
  platform: Platform;
}

const rankingCoefficients = {
  content: 0.5,
  thumbnail: 0.5,
  demo: 1,
  rarity: 2,
  interactions: 0.5,
};

/**
 * Rank a project based on its content, thumbnail, demo and rarity.
 * @param project the project to rank
 * @param catalog the catalog of projects to compare rarity
 * @returns the rank of the project
 */
export function rank(project: Project, catalog: Project[]): number {
  const contentLength = project.title.length + (project.description?.length || 0);
  const contentPertinence = contentLength > 150
    ? rankingCoefficients.content - (contentLength - 150) / 350
    : contentLength / 150;

  const hasThumbnail = project.thumbnail ? rankingCoefficients.thumbnail : 0;
  const hasDemo = project.demo ? rankingCoefficients.demo : 0;

  const minorityCoefficient = rankingCoefficients.rarity
   * (catalog.filter((item) => item.platform === project.platform).length / catalog.length);

  const interactionCoefficient = Object.values(project.interactions ?? {})
    .reduce((acc, value) => acc + value, 0) * rankingCoefficients.interactions;

  return contentPertinence + hasThumbnail + hasDemo + minorityCoefficient + interactionCoefficient;
}
